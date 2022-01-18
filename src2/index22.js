const stage = document.querySelector("body");

function handleWindow(){
    if(window.innerWidth > 600){
        stage.style.backgroundColor = "tomato";
        console.log("ads");
    }
}


window.addEventListener("resize", handleWindow);