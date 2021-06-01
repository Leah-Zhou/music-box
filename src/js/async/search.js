

const allSong=[];
const favour =document.querySelectorAll('.favour');
let fav=false;
let isSongPlay=false;


// control playlist
 function controlMusic(){
  const songList =document.querySelector('.song-list');
  let fav=false;
  let isSongPlay=false;

  songList.addEventListener('click', e=>{
   if(e.target.classList.contains('fa-heart')){
     if(fav){
       fav=!fav;
       console.log(fav);
       e.target.classList.remove("fas")
       e.target.classList.add("far");
     }else{
       fav=!fav;
       console.log(fav);
       e.target.classList.add("fas")
       e.target.classList.remove("far");
     }
   }
   else if(e.target.classList.contains('play-btn')){
     isSongPlay=!isSongPlay;
     let songId=e.target.getAttribute('data-id');
     let playSong=document.getElementById(songId);
     if(isSongPlay){
       playSong.play();
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause');
     }else{
       playSong.pause();
        e.target.classList.remove('fa-pause');
        e.target.classList.add('fa-play-circle');
     }   
   }
 })
 }


export {searchMusic, controlMusic};
