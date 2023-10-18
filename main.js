/* <section id="music-container">
    <div class="music-cards">
      <img href="">
      <div class="song-title">Song Title</div>
      <div class="band-name">Band Name</div>
    </div> */

const musicContainer = document.querySelector('#music-container')

function buildMusic(musicArray) {
    for (let music of musicArray) {
        let musicCard = document.createElement('div')
        musicCard.classList.add("music-cards")
        let musicImage = document.createElement('img')
        // add image source
        musicImage.alt = 'song-image'
        music.Image.appendChild(musicCard)
        musicCard.appendChild(musicContainer)
        let songTitle = document.createElement('div')
        songTitle.classList.add("song-title")
        songTitle.appendChild(musicCard)
        let bandName = document.createElement('div')
        bandName.classList.add("band-name")
        bandName.appendChild(musicCard)
      }
}

buildMusic(music)