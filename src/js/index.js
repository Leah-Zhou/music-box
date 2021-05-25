
import '../scss/index.scss';
import 'regenerator-runtime/runtime';
import loadContent from './controllers/route.js';
import {loginCtrl, signupCtrl}from './controllers/formSwitcher.js';


// invoke router
loadContent();
 window.addEventListener('hashchange', ()=>{
    loadContent()
})

// invioke form switcher
window.addEventListener('DOMContentLoaded', ()=>{
  loginCtrl();
  signupCtrl();
})


// import {LogInUser, CreateUser} from './auth';

// import {searchMusic, controlMusic} from './search.js';




// const appPage=document.querySelector('.content-wrap');
// const homePage =document.querySelector('.home-wraper');
// const body=document.querySelector('body');
// const loginUser=document.getElementById('#username')


// // check if user sign in or not
// auth.onAuthStateChanged(
//   (user)=>{
//     if(user){
//       console.log(user)
//       appPage.classList.remove('d-none');
//       homePage.classList.add('d-none');
//       body.classList.add('bg-color');
//       // loginUser=user
//     }else{
//       console.log('no user')
//       appPage.classList.add('d-none');
//       homePage.classList.remove('d-none');
//       body.classList.remove('bg-color');
//     }
//   }
// )



// // submit login or sign up form;
// const oldUser =new LogInUser();
// oldUser.signInUser();
// oldUser.signOutUser();

// const newUser = new CreateUser();
// newUser.signUpUser();

// // submit search music form




