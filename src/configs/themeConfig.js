// You can customize the template with the help of this file

import { Dashboard } from '../view/dashboard/Dashboard'

//Template config options
const themeConfig = {
  app: {
    appName: 'NautilusTrader',
    appLogoImage: require('@src/assets/images/logo/logo.svg').default
  },
  layout: {
    
    isRTL: false,
    skin: 'dark', // light, dark, bordered, semi-dark
    routerTransition: 'fadeIn', // fadeIn, fadeInLeft, zoomIn, none or check this for more transition https://animate.style/
    type: 'vertical', // vertical, horizontal
    contentWidth: 'full', // full, boxed
    menu: {
      isHidden: false,
      isCollapsed: true
    },
    navbar: {
      // ? For horizontal menu, navbar type will work for navMenu type
      type: 'floating', // static , sticky , floating, hidden
      backgroundColor: 'white' // BS color options [primary, success, etc]
    },
    footer: {
      type: 'static' // static, sticky, hidden
    },
    customizer: false,
    scrollTop: true // Enable scroll to top button
  },
  // component : <Dashboard />
}

export default themeConfig