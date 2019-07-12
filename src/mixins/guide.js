const steps = [
  {
    element: '#domSideBar',
    popover: {
      title: '菜单导航',
      description: '点击菜单可切换右侧菜单内容',
      position: 'right'
    },
    padding: 0
  },
  {
    element: '#domColapse',
    popover: {
      title: '折叠按钮',
      description: '点击收缩和展开菜单导航',
      position: 'bottom'
    }
  },
  {
    element: '#domBread',
    popover: {
      title: '面包屑导航',
      description: '用于显示当前菜单的位置',
      position: 'bottom'
    }
  },
  {
    element: '#domMessage',
    popover: {
      title: '通知',
      description: '点击图标，右侧会显示通知消息',
      position: 'left'
    }
  },
  {
    element: '#domFullScreen',
    popover: {
      title: '全屏显示',
      description: '点击图标，放大全屏显示系统',
      position: 'left'
    }
  },
  {
    element: '#domPersonal',
    popover: {
      title: '个人中心',
      description: '点击图标，显示个人信息链接',
      position: 'left'
    },
    padding: 0
  }
]
export default steps
