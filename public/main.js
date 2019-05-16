const main = () => {
  fetch('https://sdg-astro-api.herokuapp.com/api/Nasa/apod')
    .then(resp => {
      console.log(resp)
      return resp.json()
    })
    .then(image => {
      console.log({
        image
      })
    })
}
document.addEventListener('DOMContentLoaded', main)