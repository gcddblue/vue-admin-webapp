import Vue from 'vue'
import {
  Button,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Message,
  Scrollbar,
  Menu,
  MenuItemGroup,
  Submenu,
  MenuItem,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Badge,
  Table,
  TableColumn,
  Tag,
  Tabs,
  TabPane,
  Timeline,
  TimelineItem,
  Card,
  Pagination,
  Notification,
  Dialog,
  DatePicker
} from 'element-ui'
Message.install = () => {
  Vue.prototype.$message = Message
}
Notification.install = () => {
  Vue.prototype.$notify = Notification
}

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Message)
Vue.use(Notification)
Vue.use(Scrollbar)
Vue.use(Menu)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Badge)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Card)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
