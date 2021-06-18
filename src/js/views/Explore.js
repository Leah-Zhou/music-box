import { signOutUser } from "../controllers/auth";
import {searchMusic, manipulateRecomd, printRecomd} from '../controllers/useData';
import controlMusic from '../controllers/controlMusic';
import {ToggleMenu, MoveSlider, trackNavigator} from "../controllers/navigation";
import Nav from './Nav';
import favMusic from './Fav';
import album from './Album';




export default class Explore  {
  constructor(title){
    document.title=title
  }
  async getHtml(){
   return `
   <div class="align-items-md-center content-wrap">
     ${Nav}
     <div class="box-style main-content">

     <section>
          <section class="container-lg search-section">
            <form class="search-form d-block">
              <input type="text" name="songInfo" class="form-control my-3" placeholder="search by song name or artist"/>
              <input type="submit" class="d-none" />
            </form>
          </section>

        <section class="control-height">
        <ul class="song-list">
        </ul>
        </section>   
     </section>

      <section class="carousel slide" id="listControl">
        <h5 class="container-lg display-6">Recommendation</h5>
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
      ${album}
      ${favMusic}
     </div>
 </div>
   `}

   async initControllers(){
     manipulateRecomd();
     MoveSlider();
     signOutUser();
     searchMusic();
     controlMusic(document.querySelector('.recommendation-list'));
     controlMusic(document.querySelector('.fav-section'));
     controlMusic(document.querySelector('.song-list'));
     controlMusic(document.querySelector('.track-container'))
     ToggleMenu();
     printRecomd();
     trackNavigator();
    //  printHotTrackList();

   }
}



