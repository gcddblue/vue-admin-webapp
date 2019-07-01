import Vue from 'vue'
import {
  Button,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  Message,
  Scrollbar,
  Menu,
  MenuItemGroup,
  Submenu,
  MenuItem,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'
Message.install = () => {
  Vue.prototype.$message = Message
}

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Message)
Vue.use(Scrollbar)
Vue.use(Menu)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
