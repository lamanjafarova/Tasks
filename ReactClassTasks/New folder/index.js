let form =  document.querySelector("form");
let inputValue = document.querySelectorAll(".inputValue");
let consoleBtn = document.querySelector("#consoleBtn");
let dataObj;
let inputData = JSON.parse(localStorage.getItem("inputData")) ?? [];
form.addEventListener("submit", function(e){
    e.preventDefault();
    inputValue.forEach((element) => {
        element.value === "" && alert("!")
    });
     dataObj = {
        userName: "",
        userEmail: "",
        userPassword: "",
    }
    dataObj.userName = inputValue[0].value;
    dataObj.userEmail = inputValue[1].value;
    dataObj.userPassword = inputValue[2].value;
    inputData.push(dataObj);
    localStorage.setItem("inputData", JSON.stringify(inputData));
})
consoleBtn.addEventListener("click", function(){
    console.log(JSON.parse(localStorage.getItem("inputData")));
})