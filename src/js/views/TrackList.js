
 const printEachTrack =({coverart, title, artist,albumId})=>{
  const recomdList =`
        <li class="text-center">
            <section class="track-cover">
              <img src=${coverart} alt="${title}" class="track-img" data-albumId=${albumId}>
               <div>
                  <p class="song-name px-1">${title}</p>
                  <p class="song-artist px-1">${artist}</p>
               </div>
            </section>
        </li>
`
  return recomdList
}

export const EachTrack =({song,songUrl, songId})=>{
    const track=`
     <li>
       <p>${song}</p>
        <audio controls style="display: none" id=${songId}>
           <source src=${songUrl} type="audio/mpeg">
        </audio>
        <i class="fas fa-play-circle fa-3x play play-btn" data-id=${songId}></i>
     </li>
    `
    return track
}

export {printEachTrack as default}