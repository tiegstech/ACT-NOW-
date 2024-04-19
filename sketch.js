// this code was made in respective of Data Feminism Principles.
let news = []; // an array which stores the newspapers
let numnews = 13; // how many newspapers there are
let currentIndex = 0; // Track the index of the current newspaper

//LOAD IMAGES BEFORE THE PROGRAM RUNS
function preload() {
  font = loadFont('FUTURA75BOLD.TTF');
  let news1 = loadImage('1.png');
  let news2 = loadImage('2.png');
  let news3 = loadImage('3.png');
  let news4 = loadImage('4.png');
  let news5 = loadImage('5.png');
  let news6 = loadImage('6.png');
  let news7 = loadImage('7.png');
  let news8 = loadImage('8.png');
  let news9 = loadImage('9.png');
  let news10 = loadImage('10.png');
  let news11= loadImage('11.png');
  let news12= loadImage('12.png');
  let news13 = loadImage('13.png');
  news = [news1, news2, news3, news4, news5, news6, news7, news8, news9, news10, news11, news12, news13];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  
  // this call the draw function every second for the newspapers to change
  setInterval(drawNextImage, 700);
}

function draw() {
  // theres nothing in the Draw as the code is drawing in the drawNextImage function instead
  
}

function drawNextImage() {
  background(255);
   // Add "act now.." text at the top center
   textAlign(CENTER);
   textSize(80);
   fill(255, 0, 0); // Set text color to red
   text("WE NEED TO ACT NOW!!", 650, 130); // text and position
   textFont(font); // Futura Bold- inspired by Barbara kruger
  
  // Draw the newspapers to be from the center of the screen
  imageMode(CENTER);

  // Scale the image to one-fourth of its size as they are too big.
  let scaledWidth = news[currentIndex].width / 4;
  let scaledHeight = news[currentIndex].height / 4;
  
  // Draw the current image at one-fourth size and centered
  image(news[currentIndex], width / 2, height / 2, scaledWidth, scaledHeight);
  
  // Increment the index for the next image
  currentIndex = (currentIndex + 1) % numnews;
}
// Code Credits:
// p5.js (2024) https://p5js.org/reference/#/p5/loadFont, Reference: loadFont (Accessed: 25 March 2024). 
// itsjakeke (2021) random image from array. Available at: https://editor.p5js.org/itsjakeke/sketches/aMp0Xa17v (Accessed: 25 March 2024). 