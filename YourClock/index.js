let showDate = document.querySelector(".space")

setInterval(function(){
    let date = new Date()
    showDate.innerHTML = date.toLocaleTimeString()
},1000)