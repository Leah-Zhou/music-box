
import loadContent from './route.js';
import {storeUserName, getUserInfo} from './data.js';

// check validation of registation
const regExPattern={
   username:/^([\w]{1,10})$/,
   password:/[\w]{6,}/,
   email:/^([\s\S]+)+@([a-z0-9]+)\.([a-z]{2,28})$/,
}

const checkValidation=(target, pattern)=>{
  if(pattern.test(target.value)){
     target.nextElementSibling.style.opacity="0"
  }else{
    target.nextElementSibling.style.opacity="1"
  }
}
// signIn function 
async function signInUser(){
  const signInForm=document.querySelector('.form-signin');
  const reminder=signInForm.querySelector('.signin-hint');

  signInForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email=signInForm['signIn-email'].value;
    const password=signInForm['signIn-password'].value; 
    auth.signInWithEmailAndPassword(email, password).then(cred=>{
      console.log(cred);
    }).catch(err=>{
      reminder.textContent=err.message;
      reminder.style.opacity='1';
    });
});
}

// signUp function 
async function signUpUser(){
  const registerForm=document.querySelector('.form-register');

  registerForm.addEventListener('keyup', e=>{
    let inputTarget= e.target;
    let pattern = regExPattern[e.target.name];
    checkValidation(inputTarget, pattern);
  });

  registerForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email =registerForm['register-email'].value;
    const password=registerForm['register-password'].value;  
    const username=registerForm['register-username'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred=>{
      storeUserName(cred.user.uid, username);
      console.log(cred.user.uid);
    }).catch(err=>{
      console.log(err.message)})
  })
}

// sign out user 
async function signOutUser(){
  const signOut =document.querySelector('.sign-out');
  signOut.addEventListener('click', ()=>{
    auth.signOut();
  })
}

// check authentication
const body=document.querySelector('body');
const checkAuth = auth.onAuthStateChanged(
  (user)=>{
    if(user){
      location.hash="#search"; 
      loadContent(); 
      getUserInfo(user.uid);
      body.classList.add('bg-color');
    }else{
      console.log('no user');
      location.hash="#home";
      loadContent(); 
      body.classList.remove('bg-color');
    }
  }
)

export {signInUser, signUpUser, signOutUser, checkAuth};
