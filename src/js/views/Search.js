
export default class Search  {
  constructor(title){
    document.title=this.title
  }
  async getHtml(){
   return `
   <div class="align-items-md-center content-wrap">
      <section>
        <nav class="navbar navbar-expand nav-bg" >
          <div class="navbar-brand logo">
            <img src="./imgs/logo.png" alt="logo" width="30px">
          </div>
          <ul class="navbar-nav account">
            <li class="navbar-item">
              <button class="dropdown-toggle btn btn-primary-outline" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Account
              </button>
              <ul class="dropdown-menu" id="navbarExpand" aria-labelledby="navbarDropdownMenuLink">
                <li class="dropdown-item py-2">
                  <i class="fas fa-heart px-2"></i>
                  <p>My Fav</p>
                </li>
                <li class="dropdown-item py-2">
                  <i class="fas fa-user px-2"></i>
                  <p>Account Setting</p>
                </li>
                <li class="dropdown-item py-2 sign-out">
                  <i class="fas fa-power-off px-2"></i>
                  <p>Sign Out</p>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
   
      <section class="main-content d-flex flex-column justify-content-center">
       <section class="navbar-nav py-3 greeting">
         <h2>Welcome<span>&#44;</span><span id="current-user"></span></h2>
       </section>
       <section class="px-2">
         <form class="search-form d-block">
           <h6>Find Music You Like</h6>
           <input type="text" name="songInfo" class="form-control my-3" placeholder="search by song name or artist"/>
           <input type="submit" class="d-none" />
         </form>
       </section>
       <ul class="song-list">
       </ul>
      </section>
 </div>
   `
 }
}