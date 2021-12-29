const images = ["0.png","1.png","2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//ccreatElement 가 뭘까
bgImage.src = `img/${chosenImage}`;
//html를 js에서 다룬것
document.body.appendChild(bgImage); //body에 추가해주는것