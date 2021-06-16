

import{token, myKey, userId} from '../privacy/mykey';

const header =new Headers({
  "x-rapidapi-key": myKey,
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
});

 export async function getData(searchInput){   
  const request= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchInput}`, {
    "method": "GET",
    "headers": header
  })
   try{
    // console.log(request.status);
    if(request.ok){
      const data= await request.json();
      return data.data;
    }else( console.log('respond is missing'))
    }catch(err){
      console.log(err.message)
   }
}

export async function getRadio(radioId){
  // console.log('init the getchart')
  const request =await fetch(`https://deezerdevs-deezer.p.rapidapi.com/radio/${radioId}`, {
    "method": "GET",
    "headers": header
  })
  try{
    if(request.ok){
      const data =await request.json();
      return data;
    }
  }catch(err){
    console.log(err.message, 'this is the get chart erro')
  }
}


// export async function getHotTracks(){
//   const request=await fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": myKey,
//       "x-rapidapi-host": "shazam.p.rapidapi.com"
//     }
//   })
//   try{
//     if(request.status==200){
//       const data=await request.json();
//       return data.tracks;
//     }
//   }catch(err){
//     console.log(err.message)
//  } 
// }

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
