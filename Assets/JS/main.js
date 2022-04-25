import { contactListener, outListener, inPage } from './menu.js'
import { initHome } from './home.js'
const url = window.location.pathname

contactListener()
outListener()

if (url === '/' || url.includes('index')) {
  initHome()
  inPage('NavHome')
}

if (url.includes('project')) {
  inPage('navProjects')
}
