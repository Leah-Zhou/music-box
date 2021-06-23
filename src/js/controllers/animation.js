
// page transition
const homeAnimation=()=>{
  const tl=gsap.timeline();
  tl.fromTo('.animate-title', {opacity:0, scale:0}, {opacity:1, scale:1, duration:1.5, ease:"back.inOut(2)", delay:0.05})
    .fromTo(".hero-img",{y:600}, {y:0,duration:1.5, ease:"back.inOut(2)"}, "-=1")
    .fromTo('.form-wrap', {x:10, opacity:0}, {x:0, opacity:1, duration:1.3, delay: 0.1, ease:"power2"})
}

// const homeLeave=()=>{
//   const tl=gsap.timeline();
//   tl.to('.home-wrapper', {x:2000, opacity:0, duration:1})
//     .to('body',  {x:2000, backgroundColor:"#ffffff"}, "<")
// }

// const exploreEnter=()=>{
//   const tl=gsap.timeline();
//   tl.fromTo('body', {x:2000}, {x:0, duration:1, ease:"power4.in"})
// }


const homeLeave=()=>{
  gsap.to('.home-wrapper', {x:2000, opacity:0, duration:1})
}
const exploreEnter=()=>{
  const tl=gsap.timeline();
  tl.fromTo('body',{opacity:0}, {opacity:1,duration:1, ease:"power4.in"})
}


// object animation
const floatIn=()=>{
  gsap.fromTo('.song-list li', {opacity:0, y:15}, {opacity:1, y:0, ease:"power2.inout", duration:1, delay:0.05})
}
const floatOut=()=>{
  gsap.to('.song-list li', {opacity:0, y:15, ease:"power2.inout", duration:1})
}
export {homeAnimation, homeLeave, exploreEnter, floatIn, floatOut};