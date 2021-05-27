

import mykey from '../privacy/mykey';

 export default async function getData(searchInput){   
  const searchKey=searchInput
  const request= await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchKey}`, {
    "method": "GET",
    "headers": mykey
  })
  const data= await request.json();
  console.log(data.data);
   return data.data;
}