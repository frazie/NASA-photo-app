//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=Ay0aS0fIuIfY32JkKfuRkk7L60eSPeXJz0PjgV4H&date=${date}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('span').innerText = data.date
        document.querySelector('h2').innerText = data.title
        
        document.querySelector('p').innerText = data.explanation
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.url
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}