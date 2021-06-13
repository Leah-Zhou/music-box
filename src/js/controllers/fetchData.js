

import myKey from '../privacy/mykey';



// export async function getRecommendation(id){
//   const request =await fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${id}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": myKey,
// 		"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com"
// 	}
// })
//    const recommendations=await request.json();
//    let respArray =recommendations.tracks;
//    return respArray;
// }

 export async function getData(searchInput){   
  const searchKey=searchInput
  const request= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchKey}`, {
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


