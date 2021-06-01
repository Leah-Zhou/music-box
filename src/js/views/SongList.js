export default class SongList {
   getHtml(list){
    let printedHtml=
    `
      <li class="col-md-5 col-lg-3 col-xl-2 d-inline-block text-center position-relative">
       <div class="song-item card-style">
        <audio controls style="display:none" id="${list.id}">
          <source src=${list.preview} type="audio/ogg">
        </audio>
        <div class="album">
          <img src=${list.album.cover_medium} alt="cover of ${list.title}" class="cover my-1">
          <div class="album-top play"  data-id="${list.id}">
          </div>
          <i class="far fa-play-circle fa-2x play play-btn" data-id="${list.id}"></i>
        </div>
        <div>
          <p class="song-name my-1">${list.title_short}</p>
          <p class="song-artist text-muted fs-6 fw-lighter px-1">${list.artist.name}</p>
          <i class="far fa-heart fa-2x my-1" data-fav="false"></i>
        </div>
       </div>
      </li>
     `

      return printedHtml
  }
}