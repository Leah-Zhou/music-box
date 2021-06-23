import printSongs from '../views/SongList';

// const checkFavList=()=>{
//   let favSection =document.querySelector('.fav-list'); 
//   console.log('call check list');
//   if (favSection.children.length>0){
//     favSection.style.height="330px"
//   }else{
//     favSection.style.height="auto";
//     favSection.innerHTML=`<p class="muted">Let's search your favourite music and add them to here!</p>`
//   }
// }

 const fetchFav=async(userId)=>{
   db.collection("musicApp").where("currentUserId", "==", userId)
    .onSnapshot((querySnapshot) => {
      let favSection =document.querySelector('.fav-list'); 
      querySnapshot.docChanges().forEach(change=>{
           let songObj=change.doc.data();
            let {songSrc, album, songId, songName, artist, isFav}=songObj;

            if(isFav){
             favSection.innerHTML+=printSongs({songSrc, album, songId, songName, artist, isFav});  
            }else{
               let removeNode =favSection.querySelector(`[data-songId="${songId}"]`);
               if (removeNode){
                 removeNode.parentNode.removeChild(removeNode);
               }
               let selectedNode =document.querySelectorAll(`[data-songId="${songId}"]`);
                selectedNode.forEach(node=>{
                 let favIconNode = node.querySelector('[data-fav]');
                 favIconNode.dataset.fav=false;
               })
            }
      })
    });
}

export {fetchFav};