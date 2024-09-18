const randomColor = function (){
    const hex = "0123456789ABCDEF"
    color = "#"
    for(let i = 0; i < 6 ; i++){
    color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(randomColor())
let intervalId

const startChangingColor = function ()  {
    intervalId =  setInterval(tochange,1000)
  function tochange() {
    document.body.style.backgroundColor = randomColor()
  }
}
const stopChangingColor = function (){
    clearInterval(intervalId)
    intervalId = null
}
document.querySelector(".bt1").addEventListener("click",startChangingColor)
document.querySelector(".bt2").addEventListener("click",stopChangingColor)