const data = document.querySelector(".applyBtn");
let nameData = document.querySelector(".nameData");
let surnameData = document.querySelector(".surnameData");
let responser = document.querySelector(".nameWriter");
let response = "Привет, ";

data.addEventListener("click", function DoMagick(event) {
    event.preventDefault(); 
    response += nameData.value.trim();
    response += " ";
    response += surnameData.value;
    responser.textContent = response;
    response='Привет, ';
});
