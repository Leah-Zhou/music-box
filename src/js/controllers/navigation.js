

const ToggleMenu=()=>{
  const menuBtn =document.querySelector('.menu-icon'); 
  menuBtn.addEventListener('click', ()=>{
    const sideMenu =document.querySelector('.navbar-nav');
    // const menuIcon = document.querySelector('.fa-ellipsis-v')
     sideMenu.classList.toggle('expanded');
  })
}

const MoveSlider=()=>{
  let navExplore =document.getElementById('nav-fav');
  // let navAccount =document.getElementById('nav-account');
  let signOut =document.getElementById('nav-out');
  let slider =document.querySelector('.nav-slider');
  let navSection =document.querySelector('.navbar-nav');

  navSection.addEventListener('click', ()=>{
    if(navExplore.checked){
      slider.style.top="36%";
      
    }else if(signOut.checked){
      slider.style.top="50%"
    }
  })
}
  
const trackNavigator=()=>{
  let trackAlbum =document.querySelector('.track-list');
  

  trackAlbum.addEventListener('click', e=>{
    console.log('target');
    console.log(e.target);
    if(e.target.classList.contains('track-img')){
      let prevActive =trackAlbum.querySelector('.track-active');
      prevActive.classList.remove('track-active');
      e.target.classList.add('track-active');
    }
  })
}
export {ToggleMenu, MoveSlider, trackNavigator}