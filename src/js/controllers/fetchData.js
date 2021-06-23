

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
    if(request.status==200){
      const data= await request.json();
      return data.data;
    }else( console.log('respond is missing'))
    }catch(err){
      console.log(err.message)
   }
}


export async function getRecomd(id){
  const request =await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${id}`, {
    "method": "GET",
    "headers": header,
  })
  try{
    if(request.status==200){
      const data =await request.json();
      return data;
    }
  }catch(err){
    console.log(err.message, 'this is the get chart erro')
  }
}



