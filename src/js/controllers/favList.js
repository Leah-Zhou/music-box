import printSongs from '../views/SongList';

 const fetchFav=async(userId)=>{
   db.collection("musicApp").where("currentUserId", "==", userId)
    .onSnapshot((querySnapshot) => {
      let favSection =document.querySelector('.fav-list'); 

      querySnapshot.docChanges().forEach(change=>{
           let songObj=change.doc.data();
           let {songSrc, album, songId, songName, artist, isFav}=songObj;
           console.log('before filter', isFav);

           if(isFav){
            favSection.innerHTML+=printSongs({songSrc, album, songId, songName, artist, isFav});  
           }else{
              let removeNode =favSection.querySelector(`[data-songId="${songId}"]`);
              if (removeNode){
                console.log('check parent');
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