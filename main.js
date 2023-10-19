/* <section id="music-container">
    <div class="music-cards">
      <img href="">
      <div class="song-title">Song Title</div>
      <div class="band-name">Band Name</div>
    </div> */

const musicContainer = document.querySelector('#music-container')
let search = document.querySelector('#search')
let searchButton = document.querySelector('#searchButton')
let musicSearch = document.querySelector('#music-search')
// let url = ' https://itunes.apple.com/search?term=jack+johnson&limit=25'

// search.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.log(event.target);
  // fetch(url)
  fetch('https://itunes.apple.com/search?term=bobs+burgers&entity=song')
  .then((response) => {
    return response.json()
  }).then((data) => {
    // console.log(data)
    // console.log(data.results)
    // console.log(data.results[0].kind)
    buildMusic(data.results)
  })
// })
 
  // fetch('https://itunes.apple.com/search?term=bobs+burgers&entity=song') --this was on the line that currently has fetch

function buildMusic(musicArray) {
    // cd 
    for (let song of musicArray) {
        console.log(song)
        let musicCard = document.createElement('div')
        musicCard.classList.add("music-cards")
        let musicImage = document.createElement('img')
        musicImage.src = song.artworkUrl100
        musicImage.alt = 'song-image'
        musicCard.appendChild(musicImage)
        console.log(musicCard)
        musicContainer.appendChild(musicCard)
        let songTitle = document.createElement('div')
        songTitle.classList.add("song-title")
        songTitle.innerText = `${song.trackName}`
        musicCard.appendChild(songTitle)
        let bandName = document.createElement('div')
        bandName.classList.add("band-name")
        bandName.innerText = `${song.collectionArtistName}`
        musicCard.appendChild(bandName)
      }
}
