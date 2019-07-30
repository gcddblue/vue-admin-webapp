<template>
  <div>
    <input
      type="file"
      class="upFile"
      ref="fileExcel"
      accept=".xlsx, .xls"
      @change="uploadFile"
    />
    <el-button type="primary" @click="handleClick">导入</el-button>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  props: {
    breforeUpload: Function,
    onSuccess: Function
  },
  data() {
    return {
      excelList: {
        header: null,
        results: null
      }
    }
  },
  methods: {
    handleClick() {
      this.$refs.fileExcel.click()
    },
    generateData({ header, results }) {
      this.excelList.header = header
      this.excelList.results = results
      this.onSuccess && this.onSuccess(this.excelList)
    },
    uploadFile(e) {
      const file = e.target.files[0]
      this.$refs.fileExcel.value = null
      this.readData(file)
    },
    readData(file) {
      return new Promise(resolve => {
        const readfile = new FileReader()
        readfile.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({ header, results })
          resolve()
        }
        readfile.readAsArrayBuffer(file)
      })
    },
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    }
  }
}
</script>
<style lang="scss" scoped>
.upFile {
  display: none;
}
</style>
