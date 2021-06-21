
export default function printSongs({songSrc, album, songId, songName, artist, isFav}){
  let printedHtml=
`
  <li class="text-center" data-songId=${songId}>
   <div class="song-item card-style">
    <audio controls style="display:none" id=${songId}>
      <source src=${songSrc} type="audio/ogg">
    </audio>
    <div class="album">
      <img src=${album} alt="cover of ${songName}" class="cover my-1">
      <div class="album-top play"  data-id="${songId}">
      </div>
      <i class="fas fa-play-circle fa-3x play play-btn" data-id=${songId}></i>
    </div>
    <div class="song-intro"> 
      <div>
         <p class="song-name px-1">${songName}</p>
         <p class="song-artist text-muted fs-6 px-1">${artist}</p>
      </div>
      <i class="fas fa-heart fa-2x my-1" data-fav=${isFav} data-testId=${songId}></i>
    </div>
   </div>
  </li>
 `
  return printedHtml
}