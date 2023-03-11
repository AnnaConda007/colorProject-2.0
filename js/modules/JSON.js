const JSON = (btnStlect, wrapSelect)=>{
    const btn =  document.querySelector(btnStlect)
    const wrap = document.querySelector(wrapSelect)
      const amountShowColor = 6
     let startShowCollor = 0
      let lastShowCollor=amountShowColor
    
      async function getPosts(){
        const response = await fetch("js/modules/moreColors.JSON") 
        const result = await response.json()
       const showResponse = result.slice(startShowCollor,lastShowCollor)
        for(let key in showResponse ){
          wrap.innerHTML += `<div class="color-item" >
          <img src=${showResponse[key].src} alt="цвет"  />
         </div>` 
        }
        startShowCollor+=amountShowColor
        lastShowCollor+=amountShowColor
       if(lastShowCollor>=result.length+amountShowColor){btn.remove()}
        }

     btn.addEventListener("click",getPosts)
    
    


}
export default JSON