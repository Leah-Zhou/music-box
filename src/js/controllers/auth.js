




// const regExPattern={
//    username:/^[a-z]+$/i,
//    password:/[\w]{6,}/,
//    email:/^([\w]+)+@([a-z0-9]+)\.([a-z]{2,8})$/,
// }
class LogInUser{
  signInUser(){
    const signInForm=document.querySelector('.form-signin');
    signInForm.addEventListener('submit', e=>{
      e.preventDefault();
      const email=signInForm['signIn-email'].value;
      const password=signInForm['signIn-password'].value; 
      auth.signInWithEmailAndPassword(email, password).then(cred=>{
        console.log(cred)
      }).catch(err=>{console.log(err.message)});
  });
  }
  signOutUser(){
    const signOut =document.querySelector('.sign-out');
    signOut.addEventListener('click', ()=>{
      auth.signOut();
    })
  }
}

class CreateUser{
  signUpUser(){
    const registerForm=document.querySelector('.form-register');
    registerForm.addEventListener('submit', e=>{
      e.preventDefault();
      const email =registerForm['register-email'].value;
      const password=registerForm['register-password'].value;  
      const username=registerForm['register-username'].value;
      auth.createUserWithEmailAndPassword(email, password, username).then(()=>{
        console.log('user created')
      }).catch(err=>{console.log(err.message)})
    })
  }
}

export {LogInUser, CreateUser};
