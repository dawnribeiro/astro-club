const main = () => {
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
  // fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
  // .then(resp =>{

  // })
}

document.addEventListener('DOMContentLoaded', main)