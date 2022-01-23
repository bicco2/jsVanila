const images = ["0.png","1.png","2.png"];
const body1 = document.getElementById("bodyImg");
const chosenImage = images[Math.floor(Math.random() * images.length)];

body1.style = `background-image: url('img/${chosenImage}');  background-size:cover; background-repeat: no-repeat;`;