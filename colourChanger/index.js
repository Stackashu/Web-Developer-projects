const button = document.querySelectorAll(".buttons");
const body = document.querySelector("body");

button.forEach( buttons => {
    
    buttons.addEventListener('click' , e=> {
        if(e.target.id === 'yellow') {
        body.style.backgroundColor = "yellow";
        }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = "blue";
            }
            if(e.target.id === 'green') {
                body.style.backgroundColor = "green";
                }
                if(e.target.id === 'purple') {
                    body.style.backgroundColor = "purple";
                    }


       
})
})

