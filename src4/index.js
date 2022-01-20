const clock = document.querySelector("h2#js-clock");

function getClock(){

    const setDate = new Date("2022-12-25T00:00:00+0900");


    const now = new Date();

    const distance = setDate.getTime() - now.getTime();

    const day = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/1000);

    clock.innerText = 
        `${day}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `0${seconds}` : seconds}s`;




}

getClock();
setInterval(getClock, 1000);
