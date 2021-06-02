

const ToggleMenu=()=>{
  const menuBtn =document.querySelector('.menu-icon'); 
  menuBtn.addEventListener('click', ()=>{
    const sideMenu =document.querySelector('.navbar-nav');
    const menuIcon = document.querySelector('.fa-ellipsis-v')
     sideMenu.classList.toggle('expanded');
  })
}


export {ToggleMenu}