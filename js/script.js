{
    const welcome = () =>{
    console.log("Cześć");
    }
    welcome();
const usdElement = document.querySelector(".js-usd");
const euroElement = document.querySelector(".js-euro");
const formElement = document.querySelector(".form");
const valueElement = document.querySelector(".js-value");

formElement.addEventListener("submit", (event)=>{
event.preventDefault();


})

cons calkulateResult =(usdElement, euroElement) =>{
const usd=usdElement.value;
const euro=euroElement.value;

const value=usd*euro;

valueElement.innerText= value.toFixed(2);

}
}



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
    
    let init = () => {const button = document.querySelector(".section__button");
    
    button.addEventListener("click", button1);
    
    
    
    }
    init();