//FUNÇÃO CLICK - ABRIR E FECHAR MENU
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//FUNÇÃO ESCONDER MENU QUANDO CLICAR EM LINK
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// SLIDE SLIDER SWIPER//

const swiper = new Swiper('.swiper-container', {
  slidePerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mouseweheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true
    }
  }
})

//SCROLLREVEAL: MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PAGINA //
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #contact .text, #contact .links,
   footer .brand, footer .social
   `,
  { interval: 100 }
)

// BOTÃO VOLTAR PARA O TOP//

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// MENU ATIVO CONFORME SEÇÃO VISIVEL NA PAGINA
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  backToTop()
  activateMenuAtCurrentSection()
})
