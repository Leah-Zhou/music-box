
const homeAnimation=()=>{
  const tl=gsap.timeline();
  
  tl.fromTo('.animate-title', {opacity:0, scale:0}, {opacity:1, scale:1, duration:1.5, ease:"back.inOut(2)", delay:0.05})
    .fromTo(".hero-img",{y:600}, {y:0,duration:1.5, ease:"back.inOut(2)"}, "-=1")
    .fromTo('.form-wrap', {x:10, opacity:0}, {x:0, opacity:1, duration:1.3, delay: 0.1, ease:"power2"})
}



export {homeAnimation};