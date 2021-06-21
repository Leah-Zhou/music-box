import {loginCtrl, signupCtrl}from '../controllers/formSwitcher.js';
import {signInUser, signUpUser}from '../controllers/auth.js';
import { homeAnimation } from '../controllers/animation.js';

export default class Home{
  constructor(title){
    document.title=title
  }
   async getHtml(){
    return `
    <div class="home-wrapper">
      <section class="title">
        <img src="imgs/logo.png" alt="music box logo" class="logo animate-title">
        <h1 class="display-2 animate-title">MUSIC BOX</h1>
        <p class="animate-title">FIND YOUR LOVED MUSIC</p>
        <img src="imgs/hero-img.png" alt="hero" class="hero-img"> 
      </section>
      <section class="d-grid form-wrap">
      <div class="form-slider">
        <input type="radio" name="slide" id="login" checked />
        <input type="radio" name="slide" id="signup" />
        <label for="login" class="slide login">LogIn</label>
        <label for="signup" class="slide signup">SignUp</label>
        <div class="slider"></div>
      </div>
      <div class="form-content">
        <form class="form-signin">
          <div>
            <input type="email" id="signIn-email" class="form-control mt-4" placeholder="email" required>
          </div>
          <div>
            <input type="password" id="signIn-password" class="form-control mt-4" placeholder="password" required>
            <p class="signin-hint"></p>
          </div>
          <button class="btn btn-style px-5">Sign In</button>
        </form>

        <form class="form-register">
          <div>
            <input type="text" id="register-username" name="username" class="form-control mt-4" placeholder="username" required>
            <p class="name-hint">Maximun 10 characters, no symbols and space</p>
          </div>
          <div>
            <input type="email" id="register-email" name="email" class="form-control mt-4" placeholder="email" required>
            <p class="register-email-hint">Please use vaild email address</p>
          </div>
          <div>
            <input type="password" id="register-password" name="password" class="form-control mt-4" placeholder="password" required>
            <p class="register-pw-hint">Minimun 6 characters</p>
          </div>
          <button class="btn btn-style px-5">SignUp</button>
        </form>
      </div>
    </section>
        
    </div>
    `
  }

  
  async initControllers(){
    loginCtrl();
    signupCtrl();
    signInUser();
    signUpUser();
    homeAnimation();
  }
}