// create shape instances of objects
const backgroundGradient = new gradientBackground(10, -11, 666, 0, '#0036c4', '#071f5f')
const backgroundGradientTwo = new gradientBackground(10, -11, 666, 0, '#00c455', '#075f2d')
const backgroundGradientThree = new gradientBackground(10, -11, 666, 0, 'blue', '#00FFFF')
// const backgroundGradientThree = new gradientBackground(10, -11, 666, 0, '#c4af00', '#5f5607')
const backgroundGradientFour = new gradientBackground(10, -11, 666, 0, '#C41400', '#5F1107')
const backgroundGradientFive = new gradientBackground(10, -11, 666, 0, '#0036c4', '#f031a4')

const newSquare = new gradientSquare(10, 10, 666, 0, '#0036c4', '#00FF00')
const newSquareTwo = new gradientSquare(10, 10, 666, 0, '#00c455', '#FF0')
const newSquareThree = new gradientSquare(10, 10, 666, 0, '#00FFFF', '#FF0')

const myGradientCircle = new gradientCircle(10, 10, 666, 0,
  '#FF0000', '#0036c4',
  undefined, 300, false)
const whiteBorderCircle = new gradientCircle(10, 10, 666, 0,
  undefined, undefined,
  undefined, 900, true)
const tealCircle = new gradientCircle(10, 10, 666, 0,
  '#FFF', '#00FFFF',
  undefined, 600, false)

const yellowCircle = new gradientCircle(10, 10, 666, 0,
  '#FFF', '#FF0',
  undefined, 300, false)
//     1200, 300, false)


// SCENE ONE
function splashScreens(canvas) {
  if (i <= 200) {
    splashScreenOne(canvas)
  } else if (i > 201) {
    splashScreenTwo(canvas)
  }
  // testInterface(canvas);
}

// SCENE ONE A
function splashScreenOne(canvas) {
  backgroundGradientThree.show(canvas)
  newSquareThree.show(canvas)
  //displayTextHeader(canvas, 'SPLASH')
  //displayTextHeader(canvas, 'SCREEN', 787)

  if (i > 0 && i <= 25) {
    displayTextHeader(canvas, '!!ASHSHHH')
  }
  if (i > 25 && i <= 50) {
    displayTextHeader(canvas, '!LASHSHHH')
    changeThemeColor('#FF0')
    displayTextHeader(canvas, '   .', 120)
  } else if (i > 50 && i <= 75) {
    displayTextHeader(canvas, 'PLASHSHH')
    displayTextHeader(canvas, 'S', 787)
    changeThemeColor('#00FF')
    displayTextHeader(canvas, '  .', 200)
    displayTextHeader(canvas, '   .', 888)
  } else if (i > 75 && i <= 100) {
    displayTextHeader(canvas, 'SPLASHH')
    displayTextHeader(canvas, 'SC', 787)
    changeThemeColor('#FF0000')
    displayTextHeader(canvas, '.', 45)
  } else if (i > 100 && i <= 125) {
    displayTextHeader(canvas, 'PLASH')
    displayTextHeader(canvas, 'SCREE', 787)
    changeThemeColor('#00FF00')
    displayTextHeader(canvas, '   .', 888)
  } else if (i > 125 && i <= 150) {
    displayTextHeader(canvas, 'PLASH')
    displayTextHeader(canvas, 'SCREEN', 787)
    changeThemeColor('#FF0')
    displayTextHeader(canvas, '  .', 230)
  } else if (i > 150 && i <= 175) {
    displayTextHeader(canvas, 'SPLASH')
    displayTextHeader(canvas, 'SCREENN', 787)
    changeThemeColor('#00FF')
    displayTextHeader(canvas, '         .', 375)
  } else if (i > 175 && i <= 200) {
    displayTextHeader(canvas, 'SPLASH')
    displayTextHeader(canvas, 'SCREENNN', 787)
    changeThemeColor('#FF0000')
    displayTextHeader(canvas, '          .', 350)
  }

  // if enough time has passed, fade to black, load next scene
}

function rainbowThemeColor(myIterator) {
  //green
  //yellow
  //blue
  //red
}

// SCENE ONE B
function splashScreenTwo(canvas) {

  // blue background
  backgroundGradientFive.show(canvas)
  // newSquareThree.show(canvas)
  displayTextHeader(canvas, '¿¿¿¿¿¿¿')
  displayTextHeader(canvas, '¿¿¿¿¿¿¿¿¿¿', 787)
  // console.log('splash2::')

  // circle instead
  // backgroundGradientThree.show(canvas)
  // newSquareThree.show(canvas)

}



// SCENE TWO
// Start Screen 
function startScreen(canvas, backgroundGradient) {
  // console.log('y: ' + y)

  // canvas.clearRect(0, 0, 1200, 1600)
  changeThemeColor('#FF0')
  backgroundGradientTwo.show(canvas)
  newSquareTwo.show(canvas)
  // draw button
  // write text to screen
  displayTextHeader(canvas, "START")
  displayTextHeader(canvas, '¿', 777)
  yellowCircle.show(canvas)
  yBorderWaiter()
  // typing animation
}

// SCENE THREE
function gameScreen(canvas) {
  changeThemeColor("#00FF")
  backgroundGradientThree.show(canvas)
  animatedGradient(canvas)
  displayTextHeader(canvas, "GAME")
}

// SCENE FOUR
// function to stop the animation
function gameOver(canvas) {
  changeThemeColor("#FF0000")
  backgroundGradientFour.show(canvas)
  displayTextHeader(canvas, 'GAME')
  displayTextHeader(canvas, 'OVER', 787)
  // stopAnimation()
  // startAnimation()
}


function yBorderWaiter() {

  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

  // y axis
  //top border
  if (y > 0 && y < 1400 && !topWallHit && !bottomWallHit) {
    y += 2
  }

  // bottom border
  else if (bottomWallHit && !topWallHit) {
    y -= 2;
    topWallHit = false
    bottomWallHit = true
  }
  else if (topWallHit && !bottomWallHit) {
    y += 2
    topWallHit = true
    bottomWallHit = false
    //strobe a random color    
    if (!(i % 2)) {
      changeThemeColor(randomColor)
    }
  }

  if (y < 130) {
    topWallHit = true
    bottomWallHit = false

  }
  else if (y > 1440) {
    topWallHit = false
    bottomWallHit = true


  }



  if (SCENE_THREE) {
    topWallHit = false
    bottomWallHit = false
  }
}



// helper methods
// 
function testInterface(canvas) {
  // red square
  // canvas.fillStyle = 'red'
  // // create shape
  // canvas.beginPath()
  // canvas.rect(0, 0, 600, 600)
  // canvas.fill()
  // canvas.closePath()
  // canvas.beginPath()
  canvas.clearRect(0, 0, 240, 240);
  // canvas.fill()
  // canvas.closePath()
  return "complete";
}

// display header to screen
function displayTextHeader(canvas, text, height) {
  canvas.font = "145px Fredoka One"; //"150px Fredoka+One"
  canvas.fillStyle = "white";
  if (height) {
    canvas.fillText(text, 120, height)
  } else {
    canvas.fillText(text, 120, 666)
  }
}

// mobile only, change browser color
function changeThemeColor(color) {
  //let themeColor = document.getElementsByTagName('meta')['theme-color']['content']
  let themeColor = document.getElementsByTagName('meta')['theme-color']
  themeColor.setAttribute('content', color)
}

function stopAnimation() {
  if (myInterval) {
    clearInterval(myInterval)
    return 'animation stopped!'
  }
  return 'animation NOT stopped!'
}

function startAnimation() {
  if (!myInterval) {
    try {
      myInterval = setInterval(draw, animationSpeed)
      return 'animation started!'
    } catch (e) {
      console.error('error: animation Not started! ' + e)
      return 'animation NOT started!'
    }
    finally {
      //print scene bools
      console.warn('SCENE_ONE: ' + SCENE_ONE)
      console.warn('SCENE_TWO: ' + SCENE_TWO)
      console.warn('SCENE_THREE: ' + SCENE_THREE)
      console.warn('SCENE_FOUR: ' + SCENE_FOUR)
    }
  }
}

