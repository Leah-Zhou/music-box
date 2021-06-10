
 const printRecomdList =({coverart, title, artist,prevUrl})=>{

  const recomdList =`
        <div class="carousel-item" style="background:url(${coverart});">
          <img src=${coverart} alt="${title}" class="d-block w-100">
          <div class="recomd-intro">
            <h6 class="recomd-title">${title}</h6>
            <p>${artist}</p>
              <a class="btn btn-preview" href="${prevUrl}" target="_blank">
              <i class="fab fa-apple"></i>
              Music Preview
           </a>
        </div>
`
  return recomdList
}

export {printRecomdList as default}