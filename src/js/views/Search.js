import { signOutUser } from "../controllers/auth";
import {searchMusic} from '../controllers/useData';
import controlMusic from '../controllers/controlMusic';
import {ToggleMenu} from "../controllers/navigation";
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
     <div class="box-style">
        <section class="main-content">
        <section class="py-3 greeting">
          <h1 class="display-5 container">Welcome<span>&#44;</span><span class="current-user"></span></h1>
        </section>

        <section class="container">
          <form class="search-form d-block">
            <h5>Find Music You Like</h5>
            <input type="text" name="songInfo" class="form-control my-3" placeholder="search by song name or artist"/>
            <input type="submit" class="d-none" />
         </form>
      </section>

      <section class="song-container">
        <ul class="song-list">
        </ul>
      </section>

    </section>
      
      ${favMusic}
     </div>
 </div>
   `}

   async initControllers(){
     signOutUser();
     searchMusic();
     controlMusic();
     ToggleMenu();
   }
}