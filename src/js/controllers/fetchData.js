

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
    const data= await request.json();
     return data.data;
    }catch(err){
      console.log(err.message)
   }
}

export async function getAlbum(albumId){   
  const request= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${albumId}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": myKey,
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
  })
   try{
    console.log(request.status);
    const data= await request.json();
     return data;
    }catch(err){
      console.log(err.message)
   }
}
