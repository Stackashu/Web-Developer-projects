
let form = document.querySelector("form")

form.addEventListener("submit", click =>{
    click.preventDefault();

    let height = parseInt(document.querySelector("#Height").value)
    let weight = parseInt(document.querySelector("#Weight").value)
    let result = document.querySelector(".results")

    if(height <= 0 || isNaN(height) || height === ""){
        alert("Please Enter a Valid heigit");
    } else if(weight <= 0 || isNaN(weight) || weight === ""){
        alert("Please Enter a valid weight");
    } else{
        const  bmi = (weight  / ( ( height*height) / 10000) ).toFixed(2);
        result.innerHTML = `Your BMI : ${bmi}` ;
    }
})