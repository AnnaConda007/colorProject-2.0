const accordion = (btnSelector,textAccordionSelector )=>{
    const accordionBtn = document.querySelectorAll(btnSelector)
    const accordionText = document.querySelectorAll(textAccordionSelector)
    
    
    accordionText.forEach(item => {
      item.style.display="none"
      item.addEventListener("click",function(){
  this.style.display="none"
  this.previousElementSibling.classList.remove("active")
      })
    })
    
    
    
    
    accordionBtn.forEach(btn=>{
      btn.addEventListener("click", function(){
  if( !this.classList.contains("active")){
    this.nextElementSibling.style.display="block"
        this.classList.add("active")
  } else{
    this.nextElementSibling.style.display="none"
    this.classList.remove("active")
  }
      
      })
    })
    
    
}

export default accordion