

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
  
export {ToggleMenu, MoveSlider}