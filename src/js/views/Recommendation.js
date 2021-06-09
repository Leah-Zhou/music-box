
 const printRecomdList =({coverart, title, artist})=>{

  const recomdList =`
        <div class="carousel-item">
          <img src=${coverart} alt="${title}" class="d-block w-100">
          <div class="recomd-intro">
            <p>${title}</p>
            <p>${artist}</p>
        </div>
`
  return recomdList
}

export {printRecomdList as default}