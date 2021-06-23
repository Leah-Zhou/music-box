
import loadContent from './route';
import {storeUserName, getUserInfo} from './useData';
import{fetchFav} from './favList';
import{homeLeave, exploreEnter} from './animation';


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
const signInUser=()=>{
  const signInForm=document.querySelector('.form-signin');
  const reminder=signInForm.querySelector('.signin-hint');

  signInForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email=signInForm['signIn-email'].value;
    const password=signInForm['signIn-password'].value; 
    auth.signInWithEmailAndPassword(email, password).then(()=>{
      homeLeave();
    }).catch(err=>{
      reminder.textContent=err.message;
      reminder.style.opacity='1';
    });
});
}

// signUp function 
 const signUpUser=()=>{
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
      homeLeave();
      console.log(cred.user.uid);
    }).catch(err=>{
      console.log(err.message)})
  })
}

// sign out user 
const signOutUser=()=>{
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
      setTimeout(()=>{
        location.hash="#explore"; 
        loadContent(); 
        getUserInfo(user.uid);
        fetchFav(user.uid);
        body.style.height="100%";
        exploreEnter()
        // body.className="white-bg";
      }, 1000);
    }else{
      location.hash="#home";
      loadContent(); 
      body.style.height="100vh";
      body.className="pink-bg" 
    }
  }
)

export {signInUser, signUpUser, signOutUser, checkAuth};
