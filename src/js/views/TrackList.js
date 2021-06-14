
 const printHotTracks =({coverart, title, artist})=>{

  const recomdList =`
        <li class="text-center">
          <div class="song-item card-style">
            <section>
              <img src=${coverart} alt="${title}" class="mx-2">
            </section>
            <section class="song-intro">
              <div>
                <h6 class="song-name px-1">${title}</h6>
                <p class="song-artist text-muted fs-6">${artist}</p>
              </div>
              </section> 
          </div>  
        </li>
`
  return recomdList
}

export {printHotTracks as default}