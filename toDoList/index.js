const submit = document.querySelector(".submit")
const listContainer = document.querySelector(".list-container")
const userInput = document.querySelector("input")
let li

submit.addEventListener("click", function (){
   let text = userInput.value
    if(text === " "){
      alert("Enter some Task")
      } else {
         let li = document.createElement("li")
         li.innerHTML = text
         let cross = document.createElement('span')
         cross.innerHTML = "x"
         li.appendChild(cross)
         listContainer.appendChild(li)
         saveData()
         
      }
      userInput.value = " "
})

const dltBtn = document.querySelector("li")

listContainer.addEventListener("click",function(e){
if(e.target.tagName === "SPAN"){
   e.target.parentElement.remove()
   saveData()
} else if(e.target.tagName === "Li"){

}

},false)

function saveData(){
   localStorage.setItem("data",listContainer.innerHTML)
}
function showData(){
   listContainer.innerHTML = localStorage.getItem("data")
}

showData()