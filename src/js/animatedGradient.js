let
  canvasCenter = canvas.width / 2
  x = canvasCenter
  y = 0 //starting y position of motion objects / global
  dx = 2
  dy = 2
rightWallHit = false;
leftWallHit = false;
topWallHit = false;
bottomWallHit = false;

function animatedGradient(canvas) {
  backgroundGradient.show(canvas);
  newSquare.show(canvas);
  whiteBorderCircle.show(canvas);
  myGradientCircle.show(canvas);
  if (!mousePressed && !touchPressed) {
    tealCircle.show(canvas);
  } else {
    tealCircle.show(canvas, true, "#FFFF00", "#FF00FF");
    displayTextHeader(canvas, "TAP", 787)
  }

  // listens for border collisions to keep objects inside canvas - only x position
  xBorderWaiter()
  // yBorderWaiter()

  // When clicked, show four circle impressions in the square
  // when the circle in the correct color is placed on the impressions, 

  // flash toggle the teal circle after 9999 ms
  setTimeout(function () {
    myGradientCircle.show(canvas, true, "#FF00FF", "#FFFF00")
  }, 9999);
}


function xBorderWaiter() {
  // INCRE/DECRE TARGET X POSITION
  // check shape location and toggle direction
  // initial x+ push
  if (mousePressed && touchPressed) {
    x = canvasCenter
  }
  else if (x > 130 && x < 875 && !rightWallHit && !leftWallHit && (!mousePressed && !touchPressed)) {
    x += dx;
  } // go left if right wall was hit
  else if (rightWallHit && !leftWallHit && (!mousePressed && !touchPressed)) {
    x -= dx;
    leftWallHit = false;
    //gameOver(canvas)
    // go right if left wall was hit
  } else if (leftWallHit && !rightWallHit && (!mousePressed && !touchPressed)) {
    x += dx;
    rightWallHit = false;
  }

  // event handlers
  // x axis
  // right border
  if (x > 875) {
    rightWallHit = true;
    leftWallHit = false;
    SCENE_THREE = false
    SCENE_FOUR = true

  }
  // left border
  else if (x <= 130) {
    rightWallHit = false;
    leftWallHit = true;
  }
  console.info('x: ' + x)
}
