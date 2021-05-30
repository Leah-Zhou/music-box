import { signOutUser } from "../controllers/auth";
import {searchMusic, controlMusic} from '../controllers/useData';
import {ToggleMenu} from "../controllers/navigation";
import Nav from './Nav';

export default class Search  {
  constructor(title){
    document.title=title
  }
  async getHtml(){
   return `
   <div class="align-items-md-center content-wrap">
     ${Nav}
      <section class="main-content d-flex flex-column justify-content-center">
       <section class="py-3 greeting">
         <h1 class="display-3">Welcome<span>&#44;</span><span class="current-user"></span></h1>
       </section>
       <section class="px-2">
         <form class="search-form d-block">
           <h4 class="fw-lighter">Find Music You Like</h4>
           <input type="text" name="songInfo" class="form-control my-3" placeholder="search by song name or artist"/>
           <input type="submit" class="d-none" />
         </form>
       </section>
       <ul class="song-list">
       </ul>
      </section>
 </div>
   `}

   async initControllers(){
     signOutUser();
     searchMusic();
     controlMusic();
     ToggleMenu();
   }
}