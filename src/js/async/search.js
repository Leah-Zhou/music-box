

const allSong=[];
const favour =document.querySelectorAll('.favour');
let fav=false;
let isSongPlay=false;

// import mykey from '../privacy/mykey';

// list template
 function printOneData(list){
  const songList =document.querySelector('.song-list');
  songList.innerHTML+=`
  <li class="song-item text-center d-flex flex-column align-items-center justify-content-around position-relative card-style">
    <audio controls style="display:none" id="${list.id}">
      <source src=${list.preview} type="audio/ogg">
    </audio>
    <div class="album">
      <img src=${list.album.cover_medium} alt="cover of ${list.title}" class="cover my-1">
      <div class="album-top play"  data-id="${list.id}">
      </div>
      <i class="fas fa-play fa-2x play play-btn" data-id="${list.id}"></i>
    </div>
     <div>
      <p class="song-name my-1">${list.title}
       <span class="song-artist text-muted fs-6 fw-lighter px-1">${list.artist.name}
       </span>
      </p>
      <i class="far fa-heart"></i>
    </div>
   </li> `
}

// clean list DOM
 function cleanList(){
  songList.innerHTML='';
}

// print all list
 function printAllData(allData){
  allData.forEach(list=>{
    printOneData(list);
  })
}
// asyn API
//  const getData=async(searchInput)=>{   
//   const searchKey=searchInput
//   const request= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchKey}`, {
//     "method": "GET",
//     "headers": mykey
//   })
//   const data= await request.json();
//   console.log(data.data);
//    return data.data;
// }

// submit search to call asyn data
function searchMusic(){
  const searchForm=document.querySelector('.search-form');
    searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    const searchInput =searchForm.songInfo.value.trim().toLowerCase(); 
    if(searchInput){
      cleanList();
      console.log(searchInput)
      getData(searchInput).then((data)=>{
        printAllData(data);
      }).catch(err=>{console.log(err)});
    }
    searchForm.reset();
  })
} 

// control playlist
 function controlMusic(){
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
       e.target.classList.remove('fa-play');
       e.target.classList.add('fa-pause');
     }else{
       playSong.pause();
        e.target.classList.remove('fa-pause');
       e.target.classList.add('fa-play');
     }   
   }
 })
 }


export {searchMusic, controlMusic};
