// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2");
// <⚠️ /DONT DELETE THIS ⚠️>

const superEventHandler = {

    mouseEnter : function(){
        title.style.color =colors[0];
        title.innerText = "the mouse is here!";
    },
    mouseLeave : function(){
        title.style.color =colors[1];
        title.innerText = "the moust is gone!";
    },
    windowResize : function(){
        title.style.color =colors[2];
        title.innerText = "you just resized!";
    },
    context : function(){
        title.style.color =colors[3];
        title.innerText = "that was a right click!";
    }


};


title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.context);

