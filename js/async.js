const songList =document.querySelector('.song-list');
const allSong=[];
const searchForm =document.querySelector('.search-form');
const favour =document.querySelectorAll('.favour');
let fav=false;
let isSongPlay=false;

function printOneData(list){
    songList.innerHTML+=`
    <li class="song-item text-center d-flex flex-column align-items-center    justify-content-around position-relative card-style">
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
function cleanList(){
  songList.innerHTML='';
}
function printAllData(allData){
  allData.forEach(list=>{
    printOneData(list);
  })
}
const getData=async(searchInput)=>{   
  const searchKey=searchInput
  const request= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchKey}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "cf45d1c378msh7f50b510c3490f1p16b28bjsnf184bc07931d",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
  })

  const data= await request.json();
  console.log(data.data);
    return data.data;
}

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

songList.addEventListener('click', e=>{
  console.log(e.target)
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
