

import myKey from '../privacy/mykey';

 export async function getData(searchInput){   
  const request= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchInput}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": myKey,
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
  })
   try{
    console.log(request.status);
    if(request.status ==200){
      const data= await request.json();
      return data.data;
    }
    }catch(err){
      console.log(err.message)
   }
}

export async function getHotTracks(){
  const request=await fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "cf45d1c378msh7f50b510c3490f1p16b28bjsnf184bc07931d",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  })

  try{
    if(request.status==200){
      const data=await request.json();
      return data.tracks;
    }
  }catch(err){
    console.log(err.message)
 }
  
}

// export async function getAlbum(albumId){   
//   const request= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`, {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-key": myKey,
//         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
//     }
//   })
//    try{
//     console.log(request.status);
//     const data= await request.json();
//      return data;
//     }catch(err){
//       console.log(err.message)
//    }
// }
