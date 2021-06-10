import { signOutUser } from "../controllers/auth";
import {searchMusic, manipulateRecomd} from '../controllers/useData';
import controlMusic from '../controllers/controlMusic';
import {ToggleMenu, MoveSlider} from "../controllers/navigation";
import Nav from './Nav';
import favMusic from './Fav';

export default class Search  {
  constructor(title){
    document.title=title
  }
  async getHtml(){
   return `
   <div class="align-items-md-center content-wrap">
     ${Nav}
     <div class="box-style main-content">
        <section>
           <div class="top-section">
              <section class="py-3 greeting">
                <h1 class="container">Welcome<span>&#44;</span><span class="current-user"></span></h1>
              </section>
             <section class="container search-section">
              <form class="search-form d-block">
                <h5>Find Music You Like</h5>
                <input type="text" name="songInfo" class="form-control my-3" placeholder="search by song name or artist"/>
                <input type="submit" class="d-none" />
              </form>
            </section>
           </div>

      <section class="song-container">
        <ul class="song-list">
        </ul>
      </section>
      
    </section>
      <section class="container carousel slide" id="listControl">
        <h5>Recommendation</h5>
       <div class="carousel-inner recommendation-list"></div>
       <button class="carousel-control-prev" type="button" data-bs-target="#listControl" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
       <button class="carousel-control-next" type="button" data-bs-target="#listControl" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </section>
      ${favMusic}
     </div>
 </div>
   `}

   async initControllers(){
     manipulateRecomd();
     MoveSlider();
     signOutUser();
     searchMusic();
     controlMusic();
     ToggleMenu();
   }
}