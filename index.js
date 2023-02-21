const inputEl = document.getElementById("dark-mode");
const body = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));


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
    saveLocalStorage();
});


function saveLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}