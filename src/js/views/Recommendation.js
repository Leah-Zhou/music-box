
 const printRecomdList =({coverart, title, artist,prevUrl, songId})=>{

  const recomdList =`
        <div class="carousel-item">
          <img src=${coverart} alt="${title}" class="d-block w-100 recomd-cover">
          <div class="recomd-intro">
            <section>
              <h6 class="recomd-title">${title}</h6>
              <p>${artist}</p>
            </section>
            <section>
              <audio controls style="display:none" id="${songId}">
              <source src=${prevUrl} type="audio/ogg">
              </audio>
              <i class="far fa-play-circle fa-3x play play-btn" data-id="${songId}"></i>
            </section>

            </div>   
        </div>
`
  return recomdList
}

export {printRecomdList as default}