import { contactListener, outListener, inPage } from './menu.js'
import { initHome } from './home.js'
const url = window.location.pathname

contactListener()
outListener()

if (document.querySelector('body').children[0].id == 'home') {
  initHome()
  inPage('NavHome')
}

if (url.includes('project')) {
  inPage('navProjects')
}
