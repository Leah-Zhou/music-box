
const Nav =
`<section>
    <nav class="navbar navbar-expand-lg nav-bg d-lg-none" >
      <div class="navbar-brand logo">
        <img src="./imgs/logo.png" alt="logo" width="30px">
      </div>
      <div class="menu-icon">
        <i class="fas fa-ellipsis-v px-3"></i>
      </div>
  </nav>   
  <ul class="navbar-nav">
    <li class="nav-fav"> 
      <input type="radio" name="nav-opt" id="nav-fav" checked />
      <label for="nav-fav"> 
      <i class="fas fa-heart px-2"></i>
      Explore Music</label>
    </li>
    <li  class="nav-account">
      <input type="radio" name="nav-opt" id="nav-account"/>
      <label for="nav-account">
      <i class="fas fa-user px-2"></i>
      Account Setting
      </label>
    </li>
    <li class="sign-out">
     <input type="radio" name="nav-opt"/>
      <label for="nav-signout">
      <i class="fas fa-power-off px-2"></i>
      Sign Out
      </label>
  </li>
  </ul>
</section>`

export {Nav as default}



// <section>
//   <nav class="navbar navbar-expand nav-bg" >
//     <div class="navbar-brand logo">
//       <img src="./imgs/logo.png" alt="logo" width="30px">
//     </div>
//     <ul class="navbar-nav account">
//       <li class="navbar-item">
//         <button class="dropdown-toggle btn btn-primary-outline" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//           My Account
//         </button>
//         <ul class="dropdown-menu" id="navbarExpand" aria-labelledby="navbarDropdownMenuLink">
//           <li class="dropdown-item py-2 fav-section">
//             <i class="fas fa-heart px-2"></i>
//             <p>My Fav</p>
//           </li>
//           <li class="dropdown-item py-2">
//             <i class="fas fa-user px-2"></i>
//             <p>Account Setting</p>
//           </li>
//           <li class="dropdown-item py-2 sign-out">
//             <i class="fas fa-power-off px-2"></i>
//             <p>Sign Out</p>
//           </li>
//         </ul>
//       </li>
//     </ul>
// </nav>
// </section>