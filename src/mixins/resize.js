export default {
  data() {
    return {
      sideBarDom: null
    }
  },
  mounted() {
    this.windowInitResize()
    this.sideBarResize()
  },
  activated() {
    this.windowInitResize()
    this.sideBarResize()
  },
  deactivated() {
    this.removeWindowInitResize()
    this.removeSideBarResize()
  },
  destroyed() {
    this.removeWindowInitResize()
    this.removeSideBarResize()
  },
  methods: {
    resizeChart() {
      this.mycharts.resize()
    },
    windowInitResize() {
      window.addEventListener('resize', this.resizeChart)
    },
    removeWindowInitResize() {
      window.removeEventListener('resize', this.resizeChart)
    },
    sideWidthHandle(e) {
      if (e.propertyName === 'width') {
        this.resizeChart()
      }
    },
    sideBarResize() {
      this.sideBarDom = document.getElementsByClassName('sideBar')[0]
      this.sideBarDom.addEventListener('transitionend', this.sideWidthHandle)
    },
    removeSideBarResize() {
      this.sideBarDom.removeEventListener('transitionend', this.sideWidthHandle)
    }
  }
}
