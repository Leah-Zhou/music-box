import Home from '../views/Home';
import Explore from '../views/Explore';


async function getContent(hashId){
  const body=document.querySelector('body');
  const homePage =new Home('home');
  const explorePage =new Explore('explore');

  
  const contentViews={
    home: await homePage.getHtml(),
    explore: await explorePage.getHtml(),
  } 
  switch (hashId){
    case 'home':
      body.innerHTML=contentViews[hashId];
      await homePage.initControllers();
      break;
    
    case 'explore':
      body.innerHTML=contentViews[hashId]; 
      await explorePage.initControllers();
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





