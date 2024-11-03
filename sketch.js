/*
 * @name Load and "glitch" an image
 * @description Load and draw multiple random copies of parts of an image.
 * <p><em><span class="small"> To run this example locally, you will need an
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>
 *
 * @author Evan Raskob <e.raskob@gold.ac.uk> 2021
 *
 */

///
/// With inspiration from glitch artist hellocatfood (Antonio Roberts):
/// https://www.hellocatfood.com/#basquiats-brain
///
// the image from internet archive.org website https://archive.org/details/AA5D0604ADD345178F1D8EF28BB15E02
let agonyImage;
//gwen image from https://leagueoflegends.fandom.com/wiki/Gwen/LoL?file=Gwen_OriginalSkin.jpg made by  Paul “Zeronis” Kwon
let gwenImage;
//suffering image from https://archive.org/details/smackjeeves-180381/180381/comic/avatars/0c28a4d07ac3eb34c0287d0292d1912b.jpg
let sufferingImage;
// Preload image first so we can draw in setup
//
function preload() {
  gwenImage = loadImage("assets/gwen.jpeg"); // Load the image
  agonyImage = loadImage("assets/agony.jpeg"); // Load the image
  sufferingImage = loadImage("assets/suffering.jpg"); // Load the image
}

function setup() {
  createCanvas(1000, 600); // create a canvas to draw on

  // Displays the original image at its actual size at point (0,0) as a background
  gwenImage.resize(width, height); // resize the image to the size of the canvas
  gwenImage.filter(INVERT); // invert the image
  image(gwenImage, 0, 0); // draw the image at the top left corner

  // optional
  blendMode(MULTIPLY); // change the blend mode to multiply
  tint(255, 127); // make the image 50% transparent 

  // slow the refresh rate to 1 fps so we can see each glitched frame more easily
  frameRate(1);
}

///
/// This is for you to finish: see below
///
function draw() {
  // TO DO: finish and then use the drawRandomImageSection() here to draw a bunch of random parts of the moonWalkImage
  //noLoop(); // optional: stop draw from running, all drawing happen in setup once
  // draw 10 random parts of the image
  for (let i = 0; i < 10; i++) {
    drawRandomImageSection(sufferingImage); // draw a random part of the image
    i++; // increment the counter
  }
  drawRandomImageSection(agonyImage); // draw a random part of the image
  // noloop();
}

/**
 * Fix this!!!!!
 * draw a random part of an image at a randxom place on the screen at a random size
 * {p5.Image} img Image to draw
 */
function drawRandomImageSection(img) {
  // TO DO: make these variables random, but with sensible numbers based on the image properties. How
  // about using the x/y location to draw patterns? A more advanced function could even take in arguments
  // for a particular area of the screen to draw into.

  let sourceX = random(0, img.width); // random x location on the canvas
  let sourceY = random(0, img.height); // random y location on the canvas
  let sourceWidth = random(0, img.width); // random width
  let sourceHeight = random(0, img.height); // random height

  let destX = random(0, width); // random x location on the canvas
  let destY = random(0, height); // random y location on the canvas
  let destWidth = random(0, 300); // random width
  let destHeight = random(0, 400); // random height

  // How about adding some filters, blending, or other effects?

  // Displays the random part of the image on the screen
  image(
    img, // image to draw
    destX, // x location to draw the image
    destY, // y location to draw the image
    destWidth, // width to draw the image
    destHeight, // height to draw the image
    sourceX, // x location of the part of the image to draw
    sourceY, // y location of the part of the image to draw
    sourceWidth, // width of the part of the image to draw
    sourceHeight // height of the part of the image to draw
  );
}
