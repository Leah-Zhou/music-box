import printSongs from '../views/SongList';

 const fetchFav=async(userId)=>{
    db.collection("musicApp").where("currentUserId", "==", userId)
    .onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach(change=>{
        //   console.log(change.doc.data())
           let songObj=change.doc.data();
          let {songSrc, album, songId, songName, artist}=songObj;
           let favSection =document.querySelector('.fav-section');
           printSongs({songSrc, album, songId, songName, artist})
         
           favSection.innerHTML+=printSongs(songObj);
           console.log(favSection);
      })

    });
}


export {fetchFav};