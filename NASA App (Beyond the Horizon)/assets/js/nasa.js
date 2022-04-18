document.querySelector('#lookup').addEventListener('click', nasaPOD)

function nasaPOD(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=fxCyLzHCUoG5yDp7WhltIFyZ09BTUflORoe4B7ug`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#skyTitle').innerText = data.title
      document.querySelector('img').src = data.hdurl
      document.querySelector('#skyDescription').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
