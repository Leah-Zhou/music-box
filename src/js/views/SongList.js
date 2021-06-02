

// export default function printSongs(list){
//       let printedHtml=
    
//     `
//       <li class="text-center d-inline-flex position-relative">
//        <div class="song-item card-style">
//         <audio controls style="display:none" id="${list.id}">
//           <source src=${list.preview} type="audio/ogg">
//         </audio>
//         <div class="album">
//           <img src=${list.album.cover_medium} alt="cover of ${list.title}" class="cover my-1">
//           <div class="album-top play fa-3x"  data-id="${list.id}">
//           </div>
//           <i class="far fa-play-circle fa-2x play play-btn" data-id="${list.id}"></i>
//         </div>
//         <div>
//           <p class="song-name px-1">${list.title_short}</p>
//           <p class="song-artist text-muted fs-6 fw-lighter px-1">${list.artist.name}</p>
//           <i class="far fa-heart fa-2x my-1" data-fav="false"></i>
//         </div>
//        </div>
//       </li>
//      `

//       return printedHtml
// }



export default function printSongs({songSrc, album, songId, songName, artist}){
  let printedHtml=
`
  <li class="text-center d-inline-flex position-relative">
   <div class="song-item card-style">
    <audio controls style="display:none" id="${songId}">
      <source src=${songSrc} type="audio/ogg">
    </audio>
    <div class="album">
      <img src=${album} alt="cover of ${songName}" class="cover my-1">
      <div class="album-top play fa-3x"  data-id="${songId}">
      </div>
      <i class="far fa-play-circle fa-2x play play-btn" data-id="${songId}"></i>
    </div>
    <div>
      <p class="song-name px-1">${songName}</p>
      <p class="song-artist text-muted fs-6 fw-lighter px-1">${artist}</p>
      <i class="far fa-heart fa-2x my-1" data-fav="false"></i>
    </div>
   </div>
  </li>
 `
  return printedHtml
}