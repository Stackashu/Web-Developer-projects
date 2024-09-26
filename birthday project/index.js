//  we will make our work more easier rather than creating two pages of
// html in single pg we will create it
const Name = document.querySelector(".input-name")
const designation = document.querySelector(".input-designation")
const container = document.querySelector(".container")
const scontainer = document.querySelector(".scontainer")
let getName 
let getDesignation
const userName = document.querySelector(".name")
const userDesignation = document.querySelector(".designation")
const submit = document.querySelector(".submit")

// after submitting the form the name will be added with designationo
 submit.addEventListener("click",  function(e){
    e.preventDefault();
    
    getName =  Name.value
    getDesignation =   designation.value
    if(getName !=" " && getDesignation != " "){
        // transfer the values to the particular variable
        userName.textContent = getName
        userDesignation.textContent = getDesignation
        // here we will hide and expose the container as per requirement
        container.classList.add('hidden')
        scontainer.classList.remove('hidden')
        // clear the written values
         Name.value = " "
         designation.value = " "
    }else{
        alert("Please Enter something")
    }
})

const back = document.querySelector(".back")
const download =  document.querySelector(".download")
// for back button
back.addEventListener("click", function(e){
    e.preventDefault();
    // again hiding and exposing the container as per requirement
    scontainer.classList.add('hidden')
    container.classList.remove('hidden')
    
})

// for donwloading
//  we are using here canvas for donwload
// first of all this code will take screen shot of the particular container
// then convert it into a download link and conver it into an image
download.addEventListener("click",function(e){
e.preventDefault();

document.querySelector('.download').addEventListener('click', function() {
    html2canvas(document.querySelector(".capture")).then(canvas => {
        // Create an image from the canvas
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png'); // Create a data URL
        link.download = 'captured-image.png'; // Set the file name
        link.click(); // Trigger the download
    });
});
})