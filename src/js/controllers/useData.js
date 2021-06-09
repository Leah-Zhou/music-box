import {getData, getRecommendation} from './fetchData';
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
    // musicList.appendChild(ul);
    // musicList.firstChild.classList.add('active');
    // document.querySelectorAll('.carousel-btn').forEach(btn=>btn.style.display="block")
  }
// }

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
      }).catch(err=>{console.log(err)});
    }
    searchForm.reset();
  })
} 

function manipulateRecomd(){
  const recomdContainer = document.querySelector('.recommendation-list');
  getRecommendation().then(resp=>{
    console.log(resp);
    for (const item of resp) {
      let coverart= item.images.coverart;
      let title=item.title;
      let artist =item.subtitle;
      let printHtml=printRecomdList({coverart, title, artist});
      recomdContainer.innerHTML+=printHtml;
      // console.log(recomdContainer);
    }
    document.querySelector('.carousel-item').classList.add('active')
    // recomdContainer.querySelector('carousel-item').classList.add('active')
  }).catch(err=>{console.log(err)})
}
export {storeUserName,getUserInfo, searchMusic, manipulateRecomd}

