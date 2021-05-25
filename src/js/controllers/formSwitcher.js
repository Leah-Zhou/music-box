
// toggle signIn and sign up

async function switchContent(offset){
  const formContainer =document.querySelector('.form-content');
   formContainer.style.marginLeft=offset
}

  export async function loginCtrl(){
    const login =document.querySelector('label.login');
    login.addEventListener('click',e=>{
        e.stopPropagation();
         switchContent("0px")
  })
}

  export async function signupCtrl(){
    const signup=document.querySelector('label.signup');
    signup.addEventListener('click',e=>{
      e.stopPropagation();
       switchContent("-330px")
    })
  } 






// export {loginController, signupController};
