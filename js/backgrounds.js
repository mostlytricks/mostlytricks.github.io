const images = ["darkmode.jpg", "darkmode2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");
const bgImage = document.querySelector(".main-bg");

const pageName = "mostlytricks.github.io/";

// bgImage.src = `images/${chosenImage}`;
bgImage.style.backgroundImage = `url($/../images/` + `${chosenImage}`;
console.log(bgImage.style.backgroundImage);
