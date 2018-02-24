var input = parseInt(prompt("Enter Number")); //get input from the user and change its type to strict interger
function pingPong(userInput) {
  // loop over from one to the range given in on the input
  for (let i = 1; i <= input; i++) {
    //check the divisiblity of the input if either quaifies in any condition
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("PingPong")
    } else if (i % 3 === 0) {
      console.log("ping");

    } else if (i % 5 === 0) {
      console.log("pong");
    } else {
      console.log(i)
    }
  }
}
pingPong(input)



var imageSlider = document.getElementsById('imagesSlider');

// Array
var images = ["url('../img/pic.jpg')", "url('../img/pic1.jpg')",
  "url('../img/pic2.jpg')", "url('../img/pic3.jpg')", "url('../img/pic4.jpeg')"
];

//function
function carousel() {
  var counter = 0;
  imageSlider.style.backgroundImage = images[counter];
  counter++;

  if (counter > 4) {
    counter = 0;
  }
}
setInterval(carousel, 3000);


Cynthia
