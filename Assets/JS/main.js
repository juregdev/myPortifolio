import { contactListener, outListener, inPage, mobileListener } from './menu.js'
import { initHome } from './home.js'
import { clickCard } from './project.js'
import { eventTouch } from './touch.js'
const url = window.location.pathname

contactListener()
outListener()

if (screen.width <= 600) mobileListener()

if (document.querySelector('body').children[0].id == 'home') {
  initHome()
  inPage('NavHome')
}

if (url.includes('project')) {
  inPage('navProjects')
  clickCard()
}

eventTouch()