

import myKey from '../privacy/mykey';



export async function getRecommendation(){
  const request =await fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": myKey,
		"x-rapidapi-host": "shazam.p.rapidapi.com"
	}
})
   const recommendations=await request.json();
   let respArray =recommendations.tracks;
   return respArray;
}

 export async function getData(searchInput){   
  const searchKey=searchInput
  const request= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchKey}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": myKey,
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
  })
  const data= await request.json();
   return data.data;
}


