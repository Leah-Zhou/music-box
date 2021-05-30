import getData from './fetchData.js';
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
  const musicList =document.querySelector('.song-list');
  console.log(musicList)
  let songs =new SongList();
  allData.forEach(list=>{
    songs.getHtml(musicList, list);
  })
}

 async function searchMusic(){
  const searchForm=document.querySelector('.search-form');
    searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    const searchInput =searchForm.songInfo.value.trim().toLowerCase(); 
    if(searchInput){
      cleanList();
      // console.log(searchInput)
      getData(searchInput).then((data)=>{
        printAllData(data);
      }).catch(err=>{console.log(err)});
    }
    searchForm.reset();
  })
} 

const stroeFavSongs=async(favSongs)=>{
   db.collection('musicApp').doc(favSongs.songId).set(favSongs)
}
const deleteFavSongs=async(delSongs)=>{
   db.collection('musicApp').doc(delSongs.songId).delete();
}

const selectFavs=(parent, fav)=>{
  let songSrc = parent.querySelector('source').getAttribute('src');
  let album=parent.querySelector('.cover').getAttribute('src');
  let songId=parent.querySelector('.album-top').getAttribute('data-id')
  let songName =parent.querySelector('.song-name').textContent;
  let artist =parent.querySelector('.song-artist').textContent;
  let currentUserId = auth.currentUser.uid
  let favSongs={songSrc, album, songId, songName, artist, currentUserId};

  if(fav=="true"){
    stroeFavSongs(favSongs);
    console.log(favSongs);
  }
  else{
    console.log(favSongs);
    deleteFavSongs(favSongs);
  }
}


async function controlMusic(){
  const songList =document.querySelector('.song-list');
  let isSongPlay=false;

  songList.addEventListener('click', e=>{
   if(e.target.classList.contains('fa-heart')){
     let fav=e.target.dataset.fav;
     let parent=e.target.parentElement.parentElement;
    //  delete fav
     if(fav=='true'){    
      e.target.dataset.fav='false';
       let isFav=e.target.dataset.fav;
       e.target.className="far fa-heart fa-2x my-1";
       selectFavs(parent, isFav);
     }
    //  add fav
     else{
      e.target.dataset.fav='true';
       let isFav=e.target.dataset.fav;
       e.target.className="fas fa-heart fa-2x my-1";
       selectFavs(parent, isFav)
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

