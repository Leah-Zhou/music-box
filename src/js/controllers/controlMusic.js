import { fetchFav } from "./favList";

const stroeFavSongs=(favSongs)=>{
  db.collection('musicApp').doc(favSongs.songId).set(favSongs)
}
const deleteFavSongs=(delSongs)=>{
  db.collection('musicApp').doc(delSongs).update({isFav:false});
  db.collection('musicApp').doc(delSongs).delete().then(()=>{
    console.log('fav is delete')
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
    console.log('active delete')
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
     }else{
       playSong.pause();
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
     }   
   }
 })
 }


