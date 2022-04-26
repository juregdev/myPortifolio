const $media = document.querySelector('.socialMedia')
const $contact = document.querySelector('.send')
const $mobilePush = document.querySelector('#pushMenu')
const $Menu = document.querySelector('.social-menu')

export const contactListener = () => {
  $contact.addEventListener('click', () => {
    if ($media.style.width == '') {
     if(screen.width < 600) {
      $media.style.width = '100%'
      $media.style.padding = '1rem 0 1.2rem 0rem'
     } else { $media.style.width = '50%'
     $media.style.padding = '1rem 0 1rem 1rem'
    }
     
      $contact.children[0].style.transform = 'rotate(360deg)'
    } else {
      $media.style.width = ''
      $media.style.padding = ''
      $contact.children[0].style.transform = ''
    }
  })
 
}

export const outListener = () => {
  window.addEventListener('click', e => {
    if ($contact.contains(e.target) || $media.contains(e.target) || $Menu.contains(e.target) || $mobilePush.contains(e.target) ) {
      return
    } else {
      $media.style.width = ''
      $media.style.padding = ''
      $contact.style.transform = ''
      $Menu.style.left = ''
      $mobilePush.style.left = ''
      $mobilePush.style.transform = ''
    }
  })
}

export const mobileListener = () => {
  $mobilePush.addEventListener('click',() =>{
    if ($Menu.style.left == '') {
      $Menu.style.left = '0'
      $mobilePush.style.left = '26vw'
      $mobilePush.style.transform = 'rotate(180deg)'
    } else {
      $Menu.style.left = ''
      $mobilePush.style.left = ''
      $mobilePush.style.transform = ''
    }
  })
}

export const inPage = element => {
  document.querySelector(`#${element}`).classList.add('inPage')

  document.querySelector(`#${element}`).classList.remove('effectMenu')
}

