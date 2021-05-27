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



async function controlMusic(){
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

export {storeUserName,getUserInfo, searchMusic, controlMusic}

