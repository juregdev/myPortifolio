const netflixClone = {
  name: 'Netlfix Clone',
  description:
    'Desafio proposto pela Digital Innovation One de reprodução do Layout da Netflix como parte do Bootcamp Html Developer',
  repository: 'https://github.com/Filipebarrosg/netflixClone_DIO',
  tecnology: ['HTML', 'SASS', 'JAVASCRIPT', 'JSON'],
  images: {
    Desktop: './Assets/IMG/Projects/NetflixClone/Desktop.png',
    Mobile: [
      './Assets/IMG/Projects/NetflixClone/Mobile.png',
      './Assets/IMG/Projects/NetflixClone/mobile_2.png',
      './Assets/IMG/Projects/NetflixClone/mobile_3.png'
    ]
  }
}

const rocketCoffe = {
  name: 'Rocket Coffee',
  description: 'Desafio da cafeteria RocketCoffee proposta pela Rocketseat 🚀',
  repository: 'https://github.com/Filipebarrosg/RocketCoffe---Challenge',
  tecnology: ['HTML', 'CSS', 'JAVASCRIPT'],
  images: {
    Desktop: './Assets/IMG/Projects/RocketCoffee/Desktop.png',
    Mobile: [
      './Assets/IMG/Projects/RocketCoffee/Mobile.png',
      './Assets/IMG/Projects/RocketCoffee/Mobile_2.png'
    ]
  }
}

const renderizandoHistoria = {
  name: 'Renderizando a História',
  description:
    'O Renderizando a História foi um projeto de TCC feito pela Etec de Francisco Morato onde o intuito era construir uma plataforma de ensino focado em história e facilitando o estudo de vestibulandos.',
  repository: 'https://github.com/Filipebarrosg/Renderizando-a-Hist-ria',
  tecnology: ['HTML', 'CSS', 'JAVASCRIPT'],
  images: {
    Desktop: './Assets/IMG/Projects/Renderizando-a-Historia/Desktop.png',
    Mobile: [
      './Assets/IMG/Projects/Renderizando-a-Historia/Mobile.png',
      './Assets/IMG/Projects/Renderizando-a-Historia/Mobile_2.png',
      './Assets/IMG/Projects/Renderizando-a-Historia/Mobile_3.png'
    ]
  }
}

const rocketCamping = {
  name: 'Rocket Camping',
  description:
    'Desafio Proposto pela Rocketseat 🚀 onde foi criada uma pagina de Login de um Camping',
  repository:
    'https://github.com/Filipebarrosg/Rocketseat-Challenge-LoginCampin',
  tecnology: ['HTML', 'CSS'],
  images: {
    Desktop: './Assets/IMG/Projects/RocketCampin/Desktop.png',
    Mobile: ['./Assets/IMG/Projects/RocketCampin/Mobile.png']
  }
}

const rocketNFT = {
  name: 'Rocket NFT',
  description:
    'O Rocket NFT é um desafio proposto pela Rocketseat 🚀 onde o intuito é criar uma landing page de uma carteira de NFT',
  repository: ['https://github.com/Filipebarrosg/RocketNFT'],
  tecnology: ['HTML', 'CSS', 'JAVASCRIPT'],
  images: {
    Desktop: './Assets/IMG/Projects/RocketNFT/Desktop.png',
    Mobile: [
      './Assets/IMG/Projects/RocketNFT/Mobile.png',
      './Assets/IMG/Projects/RocketNFT/Mobile_2.png',
      './Assets/IMG/Projects/RocketNFT/Mobile_3.png'
    ]
  }
}

const Pokedex = {
  name: 'Pokedex',
  description: 'Projeto proposto para estudo de consumo de API.',
  repository: ['https://github.com/Filipebarrosg/pokedex'],
  tecnology: ['HTML', 'CSS', 'JAVASCRIPT', 'JSON'],
  images: {
    Desktop: './Assets/IMG/Projects/Pokedex/Desktop.png',
    Mobile: [
      './Assets/IMG/Projects/Pokedex/Mobile.png',
      './Assets/IMG/Projects/Pokedex/Mobile_2.png',
      './Assets/IMG/Projects/Pokedex/Mobile_3.png'
    ]
  }
}

const $cards = document.querySelectorAll('.cardProject')

export const clickCard = () => {
  $cards.forEach(card => {
    card.addEventListener('click', () => {
      let $elementInfo

      switch (card.id) {
        case 'rocketNft':
          $elementInfo = rocketNFT
          break
        case 'pokedex':
          $elementInfo = Pokedex
          break
        case 'netflixClone':
          $elementInfo = netflixClone
          break
        case 'rocketCoffee':
          $elementInfo = rocketCoffe
          break
        case 'RenderHis':
          $elementInfo = renderizandoHistoria
          break
        case 'rocketCampin':
          $elementInfo = rocketCamping
      }

      const infoProject = `
        <div class="infoProject">
          <div id="leftInfo">
            <img id='close' src="./Assets/IMG/Projects/close.png" alt="Close">
            <h1 id="infoTitle">${$elementInfo.name}</h1>
            <p id="description">${$elementInfo.description}</p>
            <div class="techsInfo">
              ${techId($elementInfo)}
            </div>
          </div
          <hr id="hrProjects"/>
          <div id="c-carrousel">
            <img id="screenDesktop" src="${
              $elementInfo.images.Desktop
            }" alt="Desktop">
            <div>
              ${mobileId($elementInfo)}
            </div>
          </div>
          <a href="${
            $elementInfo.repository
          }" target="_blank" id="linkRepo" title="Repositorio"><img src="./Assets/IMG/socialMediaColor/github.png"alt="Repositorio"></a>
        </div>
        `

      document
        .querySelector('.conteiner')
        .insertAdjacentHTML('beforeend', infoProject)

      close(infoProject)
    })
  })
}

const techId = info => {
  let retorno = ''
  info.tecnology.forEach(el => {
    retorno += `
    <img src="./Assets/IMG/techs/${el}.png" alt="${el}">`
  })
  return retorno
}

const mobileId = element => {
  let retorno = ''
  element.images.Mobile.forEach(el => {
    retorno += `
    <img class="screenMobile" src="${el}" alt="${element.name} Mobile 1">`
  })

  return retorno
}

const close = () => {
  const infoProject = document.querySelector('.infoProject')

  document.querySelector('#close').addEventListener('click', () => {
    infoProject.classList.add('projectOut')

    setTimeout(() => {
      document.querySelector('.conteiner').removeChild(infoProject)
    }, 650)
  })
}
