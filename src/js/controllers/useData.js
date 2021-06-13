import {getData} from './fetchData';
import printSongs from '../views/SongList';
import printRecomdList from '../views/Recommendation';

// manipulate user info data:
const printName=(name)=>{
  const userName =document.querySelector('.current-user');
  userName.innerText=name;
}

const storeUserName=async(userId, name)=>{
  await db.collection('musicApp').doc(userId).set(
  {username:name});
}

 async function getUserInfo(userid){
  await db.collection('musicApp').doc(userid).get().then(doc=>{
    let currentUser=doc.data().username
    printName(currentUser)
  })
}

// manipulate aysnc music data:
 function cleanList(){
  const songList =document.querySelector('.song-list');
  songList.innerHTML='';
}

  function printAllData(allData){
  const musicList =document.querySelector('.song-list');
    for(const group of allData){
       let print= printSongs({songSrc:group.preview, album:group.album.cover_medium, songId:group.id, songName:group.title_short, artist:group.artist.name});
       musicList.innerHTML+=print;
    }; 
    musicList.classList.add('fav-list')  
  }


  function searchMusic(){
    const searchForm=document.querySelector('.search-form');
    searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    const searchInput =searchForm.songInfo.value.trim().toLowerCase(); 
    if(searchInput){
      cleanList();
      // console.log(searchInput)
      getData(searchInput).then(data=>{
        console.log(data);
        printAllData(data);
      })
    }
    searchForm.reset();
  })
} 

function manipulateRecomd(){
  const recomdContainer = document.querySelector('.recommendation-list');
   let songNames =['butter', 'Good 4 U', 'Levitating','Leave The Door Open'];

   for (const name of songNames){
     getData(name).then(data=>{
       let firstItem =data[0];
       let title =firstItem.title;
       let artist =firstItem.artist.name;
       let coverart =firstItem.album.cover_big;
       let prevUrl=firstItem.preview;
       let songId =firstItem.id;
       let printHtml =printRecomdList({coverart, title,artist, prevUrl, songId})
       recomdContainer.innerHTML+=printHtml;
       if(!recomdContainer.children[0].classList.contains('active')){
         recomdContainer.querySelector('.carousel-item').classList.add('active');
         console.log('check status')
       }
     })
   }
}
export {storeUserName,getUserInfo, searchMusic, manipulateRecomd}

