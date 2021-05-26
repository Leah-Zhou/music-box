import Home from '../views/Home.js';
import Search from '../views/Search.js';
import {loginCtrl, signupCtrl}from './formSwitcher.js';
import {signInUser, signUpUser, signOutUser}from './auth.js';
// import {printName} from './data.js';


async function getContent(hashId){
  const body=document.querySelector('body');
  const homePage =new Home('home');
  const searchPage =new Search('search');

  const contentViews={
    home: await homePage.getHtml(),
    search: await searchPage.getHtml(),
  }
  switch (hashId){
    case 'home':
      body.innerHTML=contentViews[hashId];
      loginCtrl();
      signupCtrl();
      signInUser();
      signUpUser();
      break;

    case 'search':
      body.innerHTML=contentViews[hashId]; 
      signOutUser();
      break;

    default:
      body.innerHTML='<h1>PAGE NOT FOUND</h1>'; 
  } 
}

export default async function loadContent(){
  let hash=location.hash
  let hashId=hash.substring(1);
  let content =await getContent(hashId);
   return content;
}





