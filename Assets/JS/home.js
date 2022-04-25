const nameUser = [
  'F',
  'I',
  'L',
  'I',
  'P',
  'E',
  ' ',
  'B',
  'A',
  'R',
  'R',
  'O',
  'S',
  ' '
]

const devJR = [
  'D',
  'e',
  's',
  'e',
  'n',
  'v',
  'o',
  'l',
  'v',
  'e',
  'd',
  'o',
  'r',
  ' ',
  'F',
  'r',
  'o',
  'n',
  't',
  '-',
  'E',
  'n',
  'd'
]

const $pointer = document.querySelector('#pointer')
const $cargo = document.querySelector('#cargo')
let i = 0

const timer = element => {
  const tempo = setInterval(() => {
    $pointer.insertAdjacentHTML('beforeBegin', element[i])
    i++

    if (i >= element.length - 1) {
      document.querySelector('#userName').removeChild($pointer)
      $cargo.appendChild($pointer)
      timerCargo(devJR)
      i = 0
      clearInterval(tempo)
    }
  }, 150)
}

const timerCargo = element => {
  const tempo = setInterval(() => {
    $pointer.insertAdjacentHTML('beforeBegin', element[i])
    i++

    if (i >= element.length) {
      i = 0
      clearInterval(tempo)
    }
  }, 150)
}

export const initHome = () => {
  setTimeout(() => {
    timer(nameUser)
  }, 1000)
}
