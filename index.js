async function AddContent() {
    let response = await fetch('data.json')
    let data = await  response.json();
    let assets =(data.tasks[0].assets);
    for(let i=0; i<assets.length; i++){
      let elementsTitle = Array.from(document.querySelectorAll(`.content-block-title`));
        let elementTitle =elementsTitle[i];
        let dashboardlist=document.querySelector("#orderlist");
        let list=document.createElement('li');
        let hr=document.createElement('hr');
        list.innerText=assets[i].asset_title;
        if(i==8){
          dashboardlist.append(list);
        }
        else{
        dashboardlist.append(list);
        dashboardlist.append(hr);
        }
        let title = document.createElement('h1');
        title.innerText=assets[i].asset_title;
        elementTitle.append(title);
        let elements=Array.from(document.querySelectorAll(`.content-block`));
        let element=elements[i];
         let defaultDescription=document.createElement('h2');
         defaultDescription.innerText=assets[i].display_asset_reflection;
         assets[i].display_asset_reflection&&element.appendChild(defaultDescription);
        let newElement=document.createElement('iframe');
        if(assets[i].display_asset_docs){
          newElement.style.height="84vh";
          newElement.src=assets[i].display_asset_docs;
          element.append(newElement);
        }
        else if(assets[i].display_asset_video){
          newElement.src=assets[i].display_asset_video;
          element.append(newElement)
        }
        else if(assets[i].display_asset_url){
          newElement.src=assets[i].display_asset_url;
          element.append(newElement);
        }
        else if(assets[i].display_asset_image){
          newElement.src=assets[i].display_asset_image;
          element.append(newElement);
        }
          let description=document.createElement('h2')
          description.innerText=assets[i].asset_description;
          description.setAttribute('id',`${i}`)
          description.classList.add("description")
          description.style.display="none";
         element.append(description);
         let image=document.createElement('img');
         image.src="./images/arrow-down.svg" ;
         image.classList.add("bottom-arrow");
         image.setAttribute("id",`${i}`)
         element.append(image);
       }
      
      }
AddContent();

document.addEventListener("click",(e)=>{
  if(e.target.tagName==="IMG" && e.target.id ){
     let img = e.target;
     let descriptions=Array.from(document.querySelectorAll('.description'));
     if(e.target.className==="bottom-arrow"){
      descriptions.forEach((description)=>{
        if(description.id===e.target.id){
          description.style.display="inline";
        }
      })
      img.src="images/up-arrow.png";
     img.classList.remove("bottom-arrow");
     img.classList.add("bottom-arrow-up");
     }
     else{
      descriptions.forEach((description)=>{
        if(description.id===e.target.id){
          description.style.display="none";
        }
      })
      img.src="./images/arrow-down.svg";
      img.classList.add("bottom-arrow");
      img.classList.remove("bottom-arrow-up");
     }
  }
  if(e.target.id==="task"){
    let parent=e.target.parentNode;
    parent.style.display="none";
    let taskList=document.querySelector("#task-list");
    taskList.style.display="block";
  }
  if(e.target.id==="ham"){
    let menu=document.querySelector("#ham")
    menu.src='images/list (2).svg';
    menu.style.color="white";
    menu.classList.remove("bottom-arrow");
    menu.classList.remove("bottom-arrow-up");
    let head=document.querySelector("#task-board");
    head.style.display="flex";
    let taskList=document.querySelector("#task-list");
    taskList.style.display="none";
  }
})

