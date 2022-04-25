const $media = document.querySelector('.socialMedia')
const $contact = document.querySelector('.send')

export const contactListener = () => {
  $contact.addEventListener('click', () => {
    if ($media.style.width == '') {
      $media.style.width = '50%'
      $media.style.padding = '1rem 0 1rem 1rem'
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
    if ($contact.contains(e.target) || $media.contains(e.target)) {
      return
    } else {
      $media.style.width = ''
      $media.style.padding = ''
      $contact.style.transform = ''
    }
  })
}

export const inPage = element => {
  document.querySelector(`#${element}`).classList.add('inPage')

  document.querySelector(`#${element}`).classList.remove('effectMenu')
}
