const login =document.querySelector('label.login');
const signup=document.querySelector('label.signup');
const formContainer =document.querySelector('.form-content')

login.addEventListener('click',e=>{
   e.stopPropagation();
   formContainer.style.marginLeft="0px"
})

signup.addEventListener('click',e=>{
  e.stopPropagation();
  formContainer.style.marginLeft="-330px"
})

console.log('wow')