
 const printRecomdList =({coverart, title, artist,prevUrl, songId})=>{

  const recomdList =`
        <div class="carousel-item" style="background:url(${coverart}); background-size: cover;">
         <div class="dist">
          <img src=${coverart} alt="${title}" class="d-block w-100 recomd-cover">
            <section>
            <audio controls style="display:none" id="${songId}">
            <source src=${prevUrl} type="audio/ogg">
            </audio>
            <i class="far fa-play-circle play play-btn prev-play" data-id="${songId}"></i>
          </section>
         </div>
          <div class="recomd-intro">
            <section>
              <h6 class="recomd-title">${title}</h6>
              <p>${artist}</p>
            </section>
            </div>   
        </div>
`
  return recomdList
}

export {printRecomdList as default}