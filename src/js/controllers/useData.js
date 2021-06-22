import {getData, getRecomd} from './fetchData';
import printSongs from '../views/SongList';
import printRecomdList from '../views/Recommendation';
import  printEachTrack, { EachTrack }  from '../views/TrackList';
import horizontalScroll from './horizontalSrcoll';
import { floatIn,floatOut} from './animation';


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
    const songList =document.querySelector('.song-list');
    const favList =document.querySelector('.fav-list'); 
    const favChildren =favList.querySelectorAll('li');
    const favSongIds=[];
    let isFav;
    favChildren.forEach(list=>{
       favSongIds.push(Number(list.dataset.songid));
    })
    songList.classList.add('adjust-height');
    for(const group of allData){
      if(favSongIds.includes(group.id)){
        isFav=true;
      }else{
        isFav=false
      }
       let print= printSongs({songSrc:group.preview, album:group.album.cover_medium, songId:group.id, songName:group.title_short, artist:group.artist.name, isFav:isFav});
       songList.innerHTML+=print;
    }; 
    let expandBtn=document.querySelector('.expand-btn');
    expandBtn.style.display="block";
    expandBtn.addEventListener('click', function(){
      cleanList();
      floatOut();
      songList.classList.remove('adjust-height');
      expandBtn.style.display="none";
    })
    horizontalScroll(favList);
    horizontalScroll(songList);
  }


  function searchMusic(){
    const searchForm=document.querySelector('.search-form');
    searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    const searchInput =searchForm.songInfo.value.trim().toLowerCase(); 
    if(searchInput){
      cleanList();
      const songList =document.querySelector('.song-list');
      const searchHint =document.querySelector('.search-hint');
      searchHint.classList.add('show-search-hint');
      getData(searchInput).then(data=>{
        printAllData(data);
        searchHint.classList.remove('show-search-hint');
        songList.classList.add('adjust-height');
        floatIn();
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
       }
     })
   }  

}

function printRecomd(){
  let hotTrack = document.querySelector('.track-list');
  let trackContainer= document.querySelector('.track-container');
  let recomdId =[226774542,167645582,192580092,233347232,41373501,205117222];
  let isActive=false;

  for(const id of recomdId){
    getRecomd(id).then(item=>{
      
      let title=item.title;
      let artist =item.artist.name;
      let coverart=item.cover;
      let tracklist=item.tracks.data.slice(0, 5);  
      let albumId=item.id; 

      let ul=document.createElement("ul");
      ul.id=albumId;

      tracklist.forEach(list=>{
        let {song, songUrl,songId}={song:list.title, songUrl:list.preview, songId:list.id}
        ul.innerHTML+=EachTrack({song, songUrl,songId});
      })  
      trackContainer.appendChild(ul);
      hotTrack.innerHTML+=printEachTrack({coverart, title, artist, albumId});
      if(!isActive){
        let activeAlbum = hotTrack.querySelector('.track-img');
        activeAlbum.classList.add('track-active');
        trackContainer.querySelector('ul').classList.add('list-active');
        isActive=true;
      }
    })
  }
  horizontalScroll(hotTrack);
}

export {storeUserName,getUserInfo, searchMusic, manipulateRecomd, printRecomd}

