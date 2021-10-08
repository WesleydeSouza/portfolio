
function mudarCor(){
    let body = document.getElementsByTagName("BODY")[0];
    let footer = document.getElementById("footer");
    let button = document.getElementById("buttonMudarCor");
    let buttonMobile = document.getElementById("buttonMudarCorMobile");
    body.classList.toggle("dark");
    footer.classList.toggle("dark-footer");
    
    if(button.innerHTML === "Light"){
        button.innerHTML = "Dark";
    }else{
        button.innerHTML = "Light";
    };
    
    if(buttonMobile.innerHTML === "Light"){
        buttonMobile.innerHTML = "Dark";
    }else{
        buttonMobile.innerHTML = "Light";
    };
 
};