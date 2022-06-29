interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-dashboard',    
  },
  {
    name: 'Categories',
    url: '/categories',
    icon: 'icon-category'
  },
  {
    name: 'Plan Management',
    url: '/plans',
    icon: 'icon-plan'
  },
  
  {
    name: 'Withdrawal Requests',
    url: '/withdrawals',
    icon: 'icon-withdrawal'
  },
  
  {
    name: 'Reports',
    url: '/reports',
    icon: 'icon-report',
    
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'icon-customer',
    
  },
  {
    name: 'Consultant',
    url: '/consultant',
    icon: 'icon-consultant',
    
  },
  {
    name: 'Admin',
    url: '/admin',
    icon: 'icon-user',
    
  },
 
  // {
  //   name: 'Degree',
  //   url: '/degrees',
  //   icon: 'icon-degree',
    
  // },
  {
    name: 'Language',
    url: '/language',
    icon: 'icon-globe',
    
  },
  {
    name: 'Feedback',
    url: '/feedback',
    icon: 'icon-feedback',
    
  },
  {
    name: 'Notification',
    url: '/notification',
    icon: 'icon-notification',
    
  },
  {
    name: 'Configuration',
    url: '/configuration',
    icon: 'icon-settings',
    
  },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // }
];
