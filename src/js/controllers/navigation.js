

const ToggleMenu=()=>{
  const menuBtn =document.querySelector('.menu-icon'); 
  menuBtn.addEventListener('click', ()=>{
    const sideMenu =document.querySelector('.navbar-nav');
    const menuIcon = document.querySelector('.fa-ellipsis-v')
     sideMenu.classList.toggle('expanded');
  })
}

const MoveSlider=()=>{
  let navExplore =document.getElementById('nav-fav');
  let navAccount =document.getElementById('nav-account');
  let signOut =document.getElementById('nav-out');
  let slider =document.querySelector('.nav-slider');
  let navSection =document.querySelector('.navbar-nav');

  navSection.addEventListener('click', ()=>{
    if(navAccount.checked){
      slider.style.top="33.3%"
    }else if(navExplore.checked){
      slider.style.top="0%"
    }else if(signOut.checked){
      slider.style.top="100%"
    }
  })
}
  
export {ToggleMenu, MoveSlider}