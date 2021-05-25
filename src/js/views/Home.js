

export default class Home{
  constructor(title){
    document.title=this.title
  }
   async getHtml(){
    return `
    <div class="home-wraper">
      <section class="title">
        <h1 class="display-2">MUSIC BOX</h1>
        <p>FIND YOUR LOVED MUSIC</p>
      </section>
      <div>
        <img src="imgs/headphone.png" alt="headphone" class="float-headphone">
        <img src="imgs/person.png" alt="person" class="float-person">
      </div>
      <section class="d-grid form-wrap">
      <div class="form-slider">
        <input type="radio" name="slide" id="login" checked>
        <input type="radio" name="slide" id="signup">
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
            <p class="signin-hint">The password or email is invaild</p>
          </div>
          <button class="btn btn-secondary px-5">Sign In</button>
        </form>

        <form class="form-register">
          <div>
            <input type="text"  id="register-username"class="form-control mt-4" placeholder="username" required>
            <p class="name-hint">Letter character only</p>
          </div>
          <div>
            <input type="email" id="register-email" class="form-control mt-4" placeholder="email" required>
            <p class="register-email-hint">Please use vaild email address</p>
          </div>
          <div>
            <input type="password" id="register-password" class="form-control mt-4" placeholder="password" required>
            <p class="register-pw-hint">The password needs at least 6 characters</p>
          </div>
          <button class="btn btn-secondary px-5">SignUp</button>
        </form>
      </div>
    </section>
    </div>
    `
  }
}