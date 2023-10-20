/* <section id="music-container">
    <div class="music-cards">
      <img href="">
      <div class="song-title">Song Title</div>
      <div class="band-name">Band Name</div>
    </div> */

const musicContainer = document.querySelector('#music-container')
let searchForm = document.querySelector('#searchForm')
let searchButton = document.querySelector('#searchButton')
let musicSearch = document.querySelector('#music-search')
let audioSection = document.querySelector('audio-section')
let audioPlayer = document.getElementById('audioPlayer')


searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearSearchResults()
  const baseURL = "https://itunes.apple.com/search?"
  let searchPath = musicSearch.value
  let finalURL = `${baseURL}term=${searchPath}&entity=song`
  console.log(`this is the musicSearch value: ${musicSearch.value}`);
  console.log(finalURL)
  fetch(finalURL)
  .then((response) => {
    // console.log(response)
    return response.json()
    
  }).then((data) => {
    // console.log(data)
    // console.log(data.results)
    // console.log(data.results[0].kind)
    buildMusic(data.results)
  })
})


function buildMusic(musicArray) {
  for (let song of musicArray) {

    let musicCard = document.createElement('div')
    musicCard.classList.add("music-cards")
    
    let musicImage = document.createElement('img')
    musicImage.src = song.artworkUrl100
    musicImage.alt = 'song-image'
    musicCard.appendChild(musicImage)
    
    musicContainer.appendChild(musicCard)
    
    let songTitle = document.createElement('div')
    songTitle.classList.add("song-title")
    songTitle.innerText = `${song.trackName}`
    musicCard.appendChild(songTitle)
    
    let bandName = document.createElement('div')
    bandName.classList.add("band-name")
    bandName.innerText = `${song.artistName}`
    musicCard.appendChild(bandName)
    
    let playButton = document.createElement('button')
    playButton.classList.add('playButton')
    playButton.innerText = 'Play Preview'
    musicCard.appendChild(playButton)
    
    playButton.addEventListener('click', () => {
    audioPlayer.src = song.previewUrl
    console.log(song.previewUrl)
    console.log(song)

    })
  }
}

function clearSearchResults() {
  // console.log(`it worked!`)
  musicContainer.innerHTML = []
}
