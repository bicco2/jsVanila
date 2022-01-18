const enterForm = document.querySelector("#enter_num");
const enterInput = document.querySelector("#enter_num input");

const randomInput = document.querySelector("#random_num input");
const randomBtn = document.querySelector("#random_num button");

const myPickHtml = document.querySelector("#myPick");
const machinePickHtml = document.querySelector("#machinePick");
const confirmHtml = document.querySelector("#confirmPart");
const resultHtml = document.querySelector("#result");

var num = -1;

function numSubmit(event){//엔터 치면 내부에 숫자 저장됨 
    event.preventDefault();
    num = enterInput.value;
   // console.log(num);
}


function clickPlay(event){
    if(num > 0){  
        event.preventDefault();
        resultHtml.classList.remove("hidden");
        //console.log("play!");
        const myPickNum = randomInput.value; //무슨 숫자인지 받아와서 mypcik에 저장
        const randomNNN = Math.floor(Math.random() * num);
        myPickHtml.innerText = myPickNum; // You chose : 이 부분에 저장
        machinePickHtml.innerText = randomNNN;

        if(randomNNN == myPickNum){
          confirmHtml.innerText = "You Win!";
        }
        else{
            confirmHtml.innerText = "You Lose!";
        }
    }
    else{
        event.preventDefault();
        console.log("Enter Number !! or Not Positive Number");
    }
}


enterForm.addEventListener("submit",numSubmit);

randomBtn.addEventListener("click", clickPlay);
