import printSongs from '../views/SongList';

 const fetchFav=async(userId)=>{
    let unsubscribe =db.collection("musicApp").where("currentUserId", "==", userId)
    .onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach(change=>{
           let songObj=change.doc.data();
          let {songSrc, album, songId, songName, artist}=songObj;
           let favSection =document.querySelector('.fav-list');
           printSongs({songSrc, album, songId, songName, artist})
         
           favSection.innerHTML+=printSongs(songObj);
      })
    });
}


export {fetchFav};