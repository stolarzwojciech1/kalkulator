console.log("Cześć");
let usdElement = document.querySelector(".js-usd");
let euroElement = document.querySelector(".js-euro");
let formElement = document.querySelector(".form");
let valueElement = document.querySelector(".js-value");

formElement.addEventListener("submit", (event)=>{
event.preventDefault();

let usd=usdElement.value;
let euro=euroElement.value;

let value=usd*euro;

valueElement.innerText= value.toFixed(2);
})

