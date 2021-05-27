export default class SongList {

   getHtml(list){
    const songList =document.querySelector('.song-list');
    songList.innerHTML+=`
    <li class="song-item text-center d-flex flex-column align-items-center justify-content-around position-relative card-style">
      <audio controls style="display:none" id="${list.id}">
        <source src=${list.preview} type="audio/ogg">
      </audio>
      <div class="album">
        <img src=${list.album.cover_medium} alt="cover of ${list.title}" class="cover my-1">
        <div class="album-top play"  data-id="${list.id}">
        </div>
        <i class="fas fa-play fa-2x play play-btn" data-id="${list.id}"></i>
      </div>
       <div>
        <p class="song-name my-1">${list.title}
         <span class="song-artist text-muted fs-6 fw-lighter px-1">${list.artist.name}
         </span>
        </p>
        <i class="far fa-heart"></i>
      </div>
     </li> `
  }
}