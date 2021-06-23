import { fetchFav } from "./favList";

const stroeFavSongs=(favSongs)=>{
  db.collection('musicApp').doc(favSongs.songId).set(favSongs)
}
const deleteFavSongs=(delSongs)=>{
  db.collection('musicApp').doc(delSongs).update({isFav:false});
  db.collection('musicApp').doc(delSongs).delete().then(()=>{
  }).catch(err=>{console.error('error happen, not delete fav yet')});
}

const selectFavs=(parent, fav)=>{
  // console.log(favSongs);

  if(fav=="true"){
    // console.log(favSongs);
    let songSrc = parent.querySelector('source').getAttribute('src');
    let album=parent.querySelector('.cover').getAttribute('src');
    let songId=parent.querySelector('.album-top').getAttribute('data-id')
    let songName =parent.querySelector('.song-name').textContent;
    let artist =parent.querySelector('.song-artist').textContent;
    let isFav=fav;
    let currentUserId = auth.currentUser.uid
    let favSongs={songSrc, album, songId, songName, artist, currentUserId, isFav};

    stroeFavSongs(favSongs);
  }
  else{
    let songId=parent.querySelector('.album-top').getAttribute('data-id');
    // console.log(favSongs);
    deleteFavSongs(songId);
    
  }
}


export default function controlMusic(musicContent){
  let isSongPlay=false;
  musicContent.addEventListener('click', e=>{
   if(e.target.classList.contains('fa-heart')){
     let fav=e.target.dataset.fav;
     let parent=e.target.parentElement.parentElement;
    //  delete fav
     if(fav=='true'){    
      e.target.dataset.fav='false';
       let isFav=e.target.dataset.fav;
       selectFavs(parent, isFav);
     }
    //  add fav
     else{
      e.target.dataset.fav='true';
       let isFav=e.target.dataset.fav;
       selectFavs(parent, isFav);
     }
   }

   else if(e.target.classList.contains('play-btn')){
     isSongPlay=!isSongPlay;
     let songId=e.target.getAttribute('data-id');
     let playSong=document.getElementById(songId);

     if(isSongPlay){
       playSong.play();
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       
       if(e.target.classList.contains('prev-play')){
         let grandParent=e.target.parentElement.parentElement;
         let coverImg =grandParent.querySelector('.recomd-spinner');
         coverImg.classList.add('animate-cover');
         console.log(coverImg);
       }
     }else{
       playSong.pause();
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        if(e.target.classList.contains('prev-play')){
          let grandParent=e.target.parentElement.parentElement;
          let coverImg =grandParent.querySelector('.recomd-spinner');
          coverImg.classList.remove('animate-cover');
          console.log(coverImg);
        }
     }   
   }
 })
 }


