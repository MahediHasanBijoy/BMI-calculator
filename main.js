
let calculateBtn = document.querySelector("#calculateBtn");

calculateBtn.addEventListener("click", calculateBMI)

function calculateBMI(e){
    let weight = document.querySelector("#weightInput").value;
    let height = document.querySelector("#heightInput").value;
    let result = document.querySelector(".result");
    let error_msg = document.querySelector(".error");
    let BMI;

    if(weight != "" && height != ""){
        BMI = weight / (height * height);
        result.innerHTML = `<p class="BMI">Your BMI is  ${BMI.toFixed(2)}</p>`;
        error_msg.innerText = "";
    }else{
        error_msg.innerText = "Invalid Height/ Weight";
        if(result.firstElementChild){
            result.firstElementChild.remove();
        }
        
    }

}