
function mudarCor(){
    let body = document.getElementsByTagName("BODY")[0];
    let footer = document.getElementById("footer");
    let button = document.getElementById("buttonMudarCor");

    body.classList.toggle("dark");
    footer.classList.toggle("dark-footer");
    
    if(button.innerHTML === "Light"){
        button.innerHTML = "Dark";
    }else{
        button.innerHTML = "Light";
    };
 
};