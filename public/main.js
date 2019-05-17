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
  fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
    .then(resp => {
      console.log(resp)
      return resp.json()
    })
    .then(message => {
      console.log(message)

      document.querySelector('.name').textContent = message[0].mission_name
      document.querySelector('.description').textContent = message[0].details
      document.querySelector('.time').textContent = message[0].launch_date_utc
      document.querySelector('.location').textContent = message[0].launch_site.site_name_long

    })


}
document.addEventListener('DOMContentLoaded', main)