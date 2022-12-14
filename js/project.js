let nodeJs = document.getElementById('nodeJs')
let nextJs = document.getElementById('nextJs')
let reactJs = document.getElementById('reactJs')
let typeScript = document.getElementById('typeScript')

let data = []

function addData(event){
   event.preventDefault();

   let title = document.getElementById('title').value
   let content = document.getElementById('content').value
   let image = document.getElementById('image').files
   let imageUrl = URL.createObjectURL(image[0]);

   let nodejsImg = ''
   let nextjsImg = ''
   let reactImg = ''
   let typescriptImg = ''


   if(nodeJs.checked === true){
      nodejsImg =  '/img/nodejs.svg'
   }
   if(nextJs.checked === true){
      nextjsImg = '/img/nextJs.svg'
   }
   if(reactJs.checked === true){
      reactImg = '/img/react.svg'
   }
   if(typeScript.checked === true){
      typescriptImg = '/img/javascript.svg'
   }

   let project = {
      title,
      content,
      imageUrl,
      nodejsImg,
      nextjsImg,
      reactImg,
      typescriptImg
   }

   data.push(project)
   renderBlog()
   console.log(data)
}


function renderBlog(){
   document.getElementById('contents').innerHTML = ''

   for(let index = 0; index < data.length; index++ ){
      document.getElementById('contents').innerHTML += `
      <a href="/projectDetail.html" class="card-project">
         <div class="card-img">
            <img src="${data[index].imageUrl}" alt="">
         </div>
         <div class="card-content">
            <div class="card-header">
               <h3>${data[index].title}</h3>
               <p>durasi: 3bulan</p>
            </div>
            <div class="card-text">
               <p>${data[index].content}</p>
            </div>
            <div class="card-icon">
               <img src="${data[index].nodejsImg}" alt="">
               <img src="${data[index].nextjsImg}" alt="">
               <img src="${data[index].reactImg}" alt="">
               <img src="${data[index].typescriptImg}" alt="">
            </div>
            <div class="card-button">
               <button>Edit</button>
               <button>Delete</button>
            </div>
         </div >
      </a>
      `
   }
   
}