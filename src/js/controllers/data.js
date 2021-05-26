
const printName=async(name)=>{
  const userName =document.getElementById('#current-user');
  userName.innerText=name;
}

// storing user info
export const storeUserName=(userId, name)=>{
  db.collection('musicApp').doc(userId).set(
  {username:name});


   db.collection('musicApp').doc(userId).get().then(
     (doc)=>{
       printName(doc.data().username);
       console.log(doc.data().username)
     }
   )
}


// export const getUserInfo =(inputName)=>{
//    const userName =document.getElementById('#current-user');
//    userName.textContent=userName;
// }