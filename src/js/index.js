import '../scss/index.scss';
import {LogInUser, CreateUser} from './auth';
import 'regenerator-runtime/runtime';
import {searchMusic, controlMusic} from './search.js';


const login =document.querySelector('label.login');
const signup=document.querySelector('label.signup');
const formContainer =document.querySelector('.form-content');
const appPage=document.querySelector('.content-wrap');
const homePage =document.querySelector('.home-wraper');
const body=document.querySelector('body');
const loginUser=document.getElementById('#username')


// check if user sign in or not
auth.onAuthStateChanged(
  (user)=>{
    if(user){
      console.log(user)
      appPage.classList.remove('d-none');
      homePage.classList.add('d-none');
      body.classList.add('bg-color');
      // loginUser=user
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



searchMusic(),
controlMusic()

