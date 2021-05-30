
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
    <li class="fav-section">
      <i class="fas fa-heart px-2"></i>
      <p>My Fav</p>
    </li>
    <li>
      <i class="fas fa-user px-2"></i>
      <p>Account Setting</p>
    </li>
    <li class="sign-out">
    <i class="fas fa-power-off px-2"></i>
    <p>Sign Out</p>
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