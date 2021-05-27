import getData from './async.js';
import SongList from '../views/SongList.js';

// manipulate user info data:
const printName=async(name)=>{
  const userName =document.querySelector('.current-user');
  userName.innerText=name;
}

const storeUserName=async(userId, name)=>{
  db.collection('musicApp').doc(userId).set(
  {username:name});
}

 async function getUserInfo(userid){
  db.collection('musicApp').doc(userid).get().then(doc=>{
    let currentUser=doc.data().username
    printName(currentUser)
  })
}

// manipulate aysnc music data:
async function cleanList(){
  const songList =document.querySelector('.song-list');
  songList.innerHTML='';
}


async function printAllData(allData){
  let songs =new SongList();
  allData.forEach(list=>{
    const songList =document.querySelector('.song-list');
    console.log(songList);
    songs.getHtml(list)
  })
}

 async function searchMusic(){
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

export {storeUserName,getUserInfo, searchMusic}

// function printOneData(list){
//   const songList =document.querySelector('.song-list');
//   songList.innerHTML+=`
//   <li class="song-item text-center d-flex flex-column align-items-center justify-content-around position-relative card-style">
//     <audio controls style="display:none" id="${list.id}">
//       <source src=${list.preview} type="audio/ogg">
//     </audio>
//     <div class="album">
//       <img src=${list.album.cover_medium} alt="cover of ${list.title}" class="cover my-1">
//       <div class="album-top play"  data-id="${list.id}">
//       </div>
//       <i class="fas fa-play fa-2x play play-btn" data-id="${list.id}"></i>
//     </div>
//      <div>
//       <p class="song-name my-1">${list.title}
//        <span class="song-artist text-muted fs-6 fw-lighter px-1">${list.artist.name}
//        </span>
//       </p>
//       <i class="far fa-heart"></i>
//     </div>
//    </li> `
// }