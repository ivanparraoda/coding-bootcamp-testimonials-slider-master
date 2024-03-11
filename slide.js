// Obtener referencias a los botones
const prevBtn = document.getElementById('prevbtn')
const nextBtn = document.getElementById('nextbtn')

const images = document.querySelectorAll('.avatar-hero ')
const people = document.querySelectorAll('.avatar-info')
const quotes = document.querySelectorAll('.container-description .quote')
// const names = document.querySelectorAll('.name')
// const professions = document.querySelectorAll('.profession')

let index = 0

function updateSlide() {
  images.forEach((image) => (image.style.display = 'none'))
  quotes.forEach((quote) => (quote.style.display = 'none'))
  people.forEach((person) => (person.style.display = 'none'))

  images[index].style.display = 'block'
  quotes[index].style.display = 'block'
  people[index].style.display = 'block'
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length
  updateSlide()
})
prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length
  updateSlide()
})

updateSlide()
