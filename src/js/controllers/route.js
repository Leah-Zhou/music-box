import Home from '../views/Home';
import Search from '../views/Search';



async function getContent(hashId){
  const body=document.querySelector('body');
  const homePage =new Home('home');
  const searchPage =new Search('search');

  
  const contentViews={
    home: await homePage.getHtml(),
    search: await searchPage.getHtml(),
  }
   
  switch (hashId){
    case 'home':
      body.innerHTML=contentViews[hashId];
      await homePage.initControllers();
      break;
    
    case 'search':
      body.innerHTML=contentViews[hashId]; 
      await searchPage.initControllers();
      break;
    
    default:
      body.innerHTML='<h1>PAGE NOT FOUND</h1>'; 
  } 
}

export default async function loadContent(){
  let hash=location.hash
  let hashId=hash.substring(1);
  let content =await getContent(hashId);
   return content;
}





