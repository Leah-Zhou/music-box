import { signOutUser } from "../controllers/auth";
import {searchMusic} from '../controllers/useData';
import controlMusic from '../controllers/controlMusic';
import {ToggleMenu} from "../controllers/navigation";
import Nav from './Nav';
import favMusic from './Fav';

// export default class Search  {
//   constructor(title){
//     document.title=title
//   }
//   async getHtml(){
//    return `
//    <div class="align-items-md-center content-wrap">
//      ${Nav}
//      <div class="box-style">
//         <section class="main-content">
//         <section class="py-3 greeting">
//           <h1 class="display-5 fw-lighter container">Welcome<span>&#44;</span><span class="current-user"></span></h1>
//         </section>

//         <section class="d-grid container">
//           <form class="search-form d-block">
//             <h5 class="fw-lighter">Find Music You Like</h5>
//             <input type="text" name="songInfo" class="form-control my-3" placeholder="search by song name or artist"/>
//             <input type="submit" class="d-none" />
//           </form>

//             <section class="carousel slide carousel-dark" id="search-music-carousel" data-interval="false">
//             <div class="song-list carousel-inner">
//             </div>

//               <button class="carousel-control-prev carousel-btn" type="button" data-bs-target="#search-music-carousel" data-bs-slide="prev">
//               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span class="visually-hidden">Previous</span>
//             </button>
//                 <button class="carousel-control-next carousel-btn" type="button" data-bs-target="#search-music-carousel" data-bs-slide="next">
//                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                   <span class="visually-hidden">Next</span>
//                 </button>
//               </section>
//             </section>
//         </section>
//      </div>
//      ${favMusic}
//       <div>found music</div>
//  </div>
//    `}

//    async initControllers(){
//      signOutUser();
//      searchMusic();
//      controlMusic();
//      ToggleMenu();
//    }
// }



export default class Search  {
  constructor(title){
    document.title=title
  }
  async getHtml(){
   return `
   <div class="align-items-md-center content-wrap">
     ${Nav}
     <div class="box-style">
        <section class="main-content">
        <section class="py-3 greeting">
          <h1 class="display-5 fw-lighter container">Welcome<span>&#44;</span><span class="current-user"></span></h1>
        </section>

        <section class="d-grid container">
          <form class="search-form d-block">
            <h5 class="fw-lighter">Find Music You Like</h5>
            <input type="text" name="songInfo" class="form-control my-3" placeholder="search by song name or artist"/>
            <input type="submit" class="d-none" />
          </form>
             
          <section>
            <ul class="song-list">
            </ul>
          </section>
        </section>
      </section>
     </div>
     ${favMusic}
      <div>found music</div>
 </div>
   `}

   async initControllers(){
     signOutUser();
     searchMusic();
     controlMusic();
     ToggleMenu();
   }
}