{


const calkulate = (usdElement, euroElement) =>{
 
    const usd=usdElement.value;
const euro=euroElement.value;

const value=usd*euro;
return value;
}
const newresult = (usdElement, euroElement) =>{
const valueElement = document.querySelector(".js-value");
    valueElement.innerText= calkulate(usdElement, euroElement).toFixed(2);
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
/*odtąd
const welcome = () =>{
    console.log("Cześć");
    }
    
    welcome();
    
    const button1 = () => {
    const themeName = document.querySelector(".themeName");
    const body = document.querySelector(".body");
    
    body.classList.toggle("body__dark");
    themeName.innerText = body.classList.contains("body__dark") ? "Tło 1" : "Tło 2";
    
    
    }
    
    const init = () => {
        
    const button = document.querySelector(".section__button");
    
    button.addEventListener("click", button1);
    
    
    
    }
    init();

*/