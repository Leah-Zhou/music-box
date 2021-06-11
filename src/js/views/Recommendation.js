
 const printRecomdList =({coverart, title, artist,prevUrl, songId})=>{

  const recomdList =`
        <div class="carousel-item">
          <img src=${coverart} alt="${title}" class="d-block w-100">
          <div class="recomd-intro">
            <h6 class="recomd-title">${title}</h6>
            <p>${artist}</p>
            <audio controls style="display:none" id="${songId}">
            <source src=${prevUrl} type="audio/ogg">
            </audio>
            <i class="far fa-play-circle fa-3x play play-btn" data-id="${songId}"></i>
            <i class="far fa-pause-circle fa-3x" data-id="${songId}"></i>
            </div>   
        </div>
`
  return recomdList
}

export {printRecomdList as default}