const inputEl = document.getElementById("dark-mode");
const body = document.querySelector("body");


changeBodyColor();

function changeBodyColor(){
    if(inputEl.checked){
        body.style.background = "black";
    } else{
        body.style.background = "azure";
    }
}

inputEl.addEventListener("input", ()=>{
    changeBodyColor();
})