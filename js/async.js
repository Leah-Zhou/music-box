const songList =document.querySelector('.song-list');
const allSong=[];
const searchForm =document.querySelector('.search-form');
const favour =document.querySelectorAll('.favour')

function printOneData(list){
    songList.innerHTML+=`
    <li class="song-item text-center card d-flex align-items-center justify-content-around p-2 mx-2 my-3 position-relative">
    <div class="favour position-absolute top-0 start-0">
      <i class="far fa-heart fa-2x empty-heart"></i>
      <i class="fas fa-heart fa-2x position-absolute top-0 start-0  d-none soild-heart"></i>
    </div> 
    <img src=${list.images.coverart} alt="cover of ${list.title}" class="cover my-1">
     <div>
        <h6 class="song-name my-1">${list.title}</h6>
        <p class="song-artist text-muted fs-6 fw-lighter my-1">${list.subtitle}</p> 
      </div> 
  </li> `
}
function cleanList(){
  songList.innerHTML='';
}
function printAllData(allData){
  allData.forEach(item=>{
    printOneData(item.track);
  })
}

const getData=async(searchInput)=>{   
  const searchKey=searchInput
  const request= await fetch(`https://shazam.p.rapidapi.com/search?term=${searchKey}&locale=en-US&offset=0&limit=5`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "cf45d1c378msh7f50b510c3490f1p16b28bjsnf184bc07931d",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  })

  const data= await request.json();
  // console.log(data.tracks.hits);
  // const dataArray=data.tracks.hits.track
    return data.tracks.hits;
}


searchForm.addEventListener('submit', e=>{
  e.preventDefault();
  // console.log(searchForm.songInfo.value);
  const searchInput =searchForm.songInfo.value.trim().toLowerCase(); 
  if(searchInput){
    cleanList();
    console.log(searchInput)
    getData(searchInput).then((data)=>{
      console.log(data);
      printAllData(data)
    }).catch(err=>{console.log(err)});
  }
})

songList.addEventListener('click', e=>{
  console.log('hey click');
  console.log(e.target)
  if(e.target.classList.contains('empty-heart')){
    console.log(e.target, 'got it');
    e.target.nextElementSibling.classList.remove('d-none');
  }else if(
    e.target.classList.contains('soild-heart')
  ){
    e.target.classList.add('d-none');
  }
})
