{


const calculate = (usdElement, euroElement) =>{
 
    const usd=usdElement.value;
const euro=euroElement.value;

return usd*euro;
}
const newresult = (usdElement, euroElement) =>{
const valueElement = document.querySelector(".js-value");
    valueElement.innerText= calculate(usdElement, euroElement).toFixed(2);
}

const sumbit = (event) =>{

event.preventDefault();


const usdElement = document.querySelector(".js-usd");
const euroElement = document.querySelector(".js-euro");

newresult(usdElement, euroElement);

}

const init = () =>{

const formElement = document.querySelector(".form");


formElement.addEventListener("submit", sumbit);



}
init();
}
