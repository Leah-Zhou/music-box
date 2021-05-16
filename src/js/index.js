import '../scss/index.scss';
import {LogInUser, CreateUser} from './auth';
// import {submitSearch, controlMusic} from './async.js';
// import './async.js';

console.log("was");
const login =document.querySelector('label.login');
const signup=document.querySelector('label.signup');
const formContainer =document.querySelector('.form-content');
const appPage=document.querySelector('.content-wrap');
const homePage =document.querySelector('.home-wraper');
const body=document.querySelector('body');

body.querySelector('h1').style.backgroundColor="pink";


// check if user sign in or not
auth.onAuthStateChanged(
  (user)=>{
    if(user){
      console.log('user signed')
      appPage.classList.remove('d-none');
      homePage.classList.add('d-none')
      body.classList.add('bg-color');
    }else{
      console.log('no user')
      appPage.classList.add('d-none');
      homePage.classList.remove('d-none');
      body.classList.remove('bg-color');
    }
  }
)

// toggle signIn and sign up
login.addEventListener('click',e=>{
  e.stopPropagation();
  formContainer.style.marginLeft="0px"
})
signup.addEventListener('click',e=>{
 e.stopPropagation();
 formContainer.style.marginLeft="-330px"
})

// submit login or sign up form;
const oldUser =new LogInUser();
oldUser.signInUser();
oldUser.signOutUser();

const newUser = new CreateUser();
newUser.signUpUser();

// submit search music form



// submitSearch,
// controlMusic

