// 菜单配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    text: '反馈',
    to: '//github.com/alibaba/ice/issues/new',
    external: true,
    newWindow: true,
    icon: 'cart',
  },
  {
    text: '帮助',
    to: '//alibaba.github.io/ice/',
    external: true,
    newWindow: true,
    icon: 'all',
  },
];

const asideMenuConfig = [
  {
    name: '即时概况',
    path: '/dashboard',
  },
  {
    name: '广告收益',
    path: '/home',
  },
  {
    name: '广告统计',
    path: '/edit',
  },
  {
    name: '广告消耗',
    path: '/view',
  },
];

export { headerMenuConfig, asideMenuConfig };
