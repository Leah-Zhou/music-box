

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


export async function getRecomd(id){
  console.log('init the getchart');
  const request =await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${id}`, {
    "method": "GET",
    "headers": header,
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

 function getMyTest(){
  fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "4111ed95c3msh3376627ddef88cfp1d8704jsn3b4eacd45ef1",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
}

// getMyTest();


