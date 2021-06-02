
// toggle signIn and sign up
function switchContent(offset){
  const formContainer =document.querySelector('.form-content');
   formContainer.style.marginLeft=offset
}
 
  export function loginCtrl(){
    const login =document.querySelector('label.login');
    login.addEventListener('click',e=>{
        e.stopPropagation();
         switchContent("0px")
  })
}

  export function signupCtrl(){
    const signup=document.querySelector('label.signup');
    signup.addEventListener('click',e=>{
      e.stopPropagation();
       switchContent("-330px")
    })
  } 

