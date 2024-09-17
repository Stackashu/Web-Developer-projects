const head = ()=>{

   const toChange =  document.querySelector(".head")
   toChange.innerHTML = "Stackshu"
}
let changing
let regularChange
document.querySelector(".bt1").addEventListener("click",()=>{
    changing = setTimeout(head,1000)
 

})

document.querySelector(".bt2").addEventListener("click",()=>{
    clearInterval(changing)
})