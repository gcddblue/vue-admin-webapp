import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './guide'
export default {
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver({
      opacity: 0.6
    })
    this.guide()
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
