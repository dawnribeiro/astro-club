let launches = []
let position = 0

const main = () => {
  const createSlide = () => {
    document.querySelector('.name').textContent = launches[position].mission_name
    document.querySelector('.description').textContent = launches[position].details
    document.querySelector('.time').textContent = launches[position].launch_date_utc
    document.querySelector('.location').textContent = launches[position].launch_site.site_name_long
  }
  const clearOldSlide = () => {
    document.querySelector('.name').textContent = ''
    document.querySelector('.description').textContent = ''
    document.querySelector('.time').textContent = ''
    document.querySelector('.location').textContent = ''
  }
  const createNextSlide = () => {

    clearOldSlide()
    createSlide()
    position += 1
  }
  const createPreviousSlide = () => {
    clearOldSlide()
    createSlide()
    position -= 1
  }
  fetch('https://sdg-astro-api.herokuapp.com/api/Nasa/apod')
    .then(resp => {
      console.log(resp)
      return resp.json()
    })
    .then(message => {
      console.log(message)
      document.querySelector('.api-pic').style.backgroundImage = 'url(' + message.url + ')'
      document.querySelector('.copyright').textContent = 'copyright: ' + message.copyright
      document.querySelector('.title').textContent = 'title: ' + message.title
    })
  fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
    .then(resp => {
      console.log(resp)
      return resp.json()
    })
    .then(data => {
      console.log(data)
      launches = data
      createSlide()
      // createSlide(x - +1)
    })

  // when button is clicked clear old card
  // when button is clicked create new card
  document.querySelector('.btn-left').addEventListener('click', createSlide)
  document.querySelector('.btn-left').addEventListener('click', clearOldSlide)
  document.querySelector('.btn-left').addEventListener('click', createPreviousSlide)
  document.querySelector('.btn-right').addEventListener('click', createNextSlide)
}
document.addEventListener('DOMContentLoaded', main)