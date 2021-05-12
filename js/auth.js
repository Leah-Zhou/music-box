const login =document.querySelector('label.login');
const signup=document.querySelector('label.signup');
const signOut =document.querySelector('.sign-out');
const formContainer =document.querySelector('.form-content');
const signInForm=document.querySelector('.form-signin');
const registerForm=document.querySelector('.form-register');
const appPage=document.querySelector('.content-wrap');
const homePage =document.querySelector('.home-wraper');
const body=document.querySelector('body');

// toggle signIn and sign up
login.addEventListener('click',e=>{
   e.stopPropagation();
   formContainer.style.marginLeft="0px"
})

signup.addEventListener('click',e=>{
  e.stopPropagation();
  formContainer.style.marginLeft="-330px"
})

// signIn listener
signInForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email=signInForm['signIn-email'].value;
    const password=signInForm['signIn-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred=>{
      console.log(cred)
    }).catch(err=>{console.log(err.message)});
});

// register listener
registerForm.addEventListener('submit', e=>{
  e.preventDefault();
  const email =registerForm['register-email'].value;
  const password=registerForm['register-password'].value;

  auth.createUserWithEmailAndPassword(email, password).then(()=>{
    console.log('user created')
  }).catch(err=>{console.log(err.message)})
})

// sign out 
signOut.addEventListener('click', ()=>{
  auth.signOut();

})
// check if user sign in or not
auth.onAuthStateChanged(
  (user)=>{
    if(user){
      appPage.classList.remove('d-none');
      homePage.classList.add('d-none')
      body.classList.add('bg-color');
    }else{
      appPage.classList.add('d-none');
      homePage.classList.remove('d-none');
      body.classList.remove('bg-color');
    }
  }
)


