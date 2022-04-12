//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('span').innerText = data.date
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.url
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}