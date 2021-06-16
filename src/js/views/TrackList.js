
 const printEachRaido =({coverart, title})=>{

  const recomdList =`
        <li class="text-center">
          <div>
            <section class="track-cover">
              <img src=${coverart} alt="${title}">
              <h6 class="song-name px-1">${title}</h6>
            </section>
          </div>  
        </li>
`
  return recomdList
}

export {printEachRaido as default}