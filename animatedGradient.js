let 
x = canvas.width / 2;
y = 0; //starting y position of motion objects / global
dx = 2;
dy = 2;
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
    }

    // listens for border collisions to keep objects inside canvas
    borderWaiter(canvas);
  
    // When clicked, show four circle impressions in the square
    // when the circle in the correct color is placed on the impressions, 
  
    // flash toggle the teal circle after 9999 ms
    setTimeout(function () {
      // tealCircle.show(canvas, true, '#FFFF00', '#FF00FF')
      myGradientCircle.show(canvas, true, "#FF00FF", "#FFFF00");
      // console.info('TIMEOUT! ')
    }, 9999);
  }
  
  function borderWaiter(canvas) {
    // INCRE/DECRE TARGET X POSITION
    // check shape location and toggle direction
    // initial x+ push
    if (x > 130 && x < 875 && !rightWallHit && !leftWallHit) {
      x += dx;
    } // go left if right wall was hit
    else if (rightWallHit && !leftWallHit) {
      x -= dx;
      leftWallHit = false;
      //gameOver(canvas)
      // go right if left wall was hit
    } else if (leftWallHit && !rightWallHit) {
      x += dx;
      rightWallHit = false;
    }
  
    // initial y+ push
    if (y >= 0 && y < 1400 && !topWallHit && !bottomWallHit) {
      y += dy;
    } // go down if bottom wall was hit
    else if (topWallHit && !bottomWallHit) {
      y += dy;
      bottomWallHit = false;
      // go down if top wall was hit
    } else if (bottomWallHit && !topWallHit) {
      y -= dy;
      topWallHit = false;
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
    // y axisx
    //top border
    if (y < 0) {
      y += dy;
      topWallHit = true;
      bottomWallHit = false;
    }
    // bottom border
    if (y >= 1400) {
      y -= dy;
      topWallHit = false;
      bottomWallHit = true;
    }
  }
  