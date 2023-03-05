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

const myGradientCircle = new gradientCircle(10, 10, 666, 0, '#FF0000', '#0036c4', undefined, 300, false) //top red/blue
const whiteBorderCircle = new gradientCircle(10, 10, 666, 0, undefined, undefined, undefined, 900, true)  //bottom circle outline
const tealCircle = new gradientCircle(10, 10, 666, 0, '#FFF', '#00FFFF', undefined, 600, false)  //middle teal
// const fruitStickerCircle = new gradientCircle(10, 10, 666, 0, '#FFF', 'black', undefined, 600, false)

const yellowCircle = new gradientCircle(10, 10, 666, 0, '#FFF', '#FF0', undefined, 300, false)
//     1200, 300, false)

// SCENE ONE
function splashScreens(canvas) {
  console.info('SCENE 1: SPLASH SCREENS')
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

  // animate theme color
  rainbowThemeColor()
  // animate text
  splashScreenText(canvas)
} // if enough time has passed, fade to black, load next scene

let colors = ['#00FF00', '#FF0', '#00FF', '#FF0000']
//color[0-25][100-125]
//color[25-50]
//color[50-75]
//color[75-100]
//global time based, use local time next
function rainbowThemeColor() {
  //green, yellow, blue, red
  if (i > 0 && i <= 25) {
    //default green set in index.html
  } else if (i > 25 && i <= 50) {
    changeThemeColor('#FF0')
  } else if (i > 50 && i <= 75) {
    changeThemeColor('#00FF')
  } else if (i > 75 && i <= 100) {
    changeThemeColor('#FF0000')
  } else if (i > 100 && i <= 125) {
    changeThemeColor('#00FF00')
  } else if (i > 125 && i <= 150) {
    changeThemeColor('#FF0')
  } else if (i > 150 && i <= 175) {
    changeThemeColor('#00FF')
  } else if (i > 175 && i <= 200) {
    changeThemeColor('#FF0000')
  }
}

function splashScreenText(canvas) {
  //green, yellow, blue, red
  if (i > 0 && i <= 25) {
    displayTextHeader(canvas, '!!ASHSHHH')
  } else if (i > 25 && i <= 50) {
    displayTextHeader(canvas, '!LASHSHHH')
    displayTextHeader(canvas, '   .', 120)
  } else if (i > 50 && i <= 75) {
    displayTextHeader(canvas, 'PLASHSHH')
    displayTextHeader(canvas, 'S', 787)
    // displayTextHeader(canvas, '  .', 200)
    displayTextHeader(canvas, '   .', 888)
  } else if (i > 75 && i <= 100) {
    displayTextHeader(canvas, 'SPLASHH')
    displayTextHeader(canvas, 'SC', 787)
    displayTextHeader(canvas, '.', 45)
  } else if (i > 100 && i <= 125) {
    displayTextHeader(canvas, 'PLASH')
    displayTextHeader(canvas, 'SCREE', 787)
    displayTextHeader(canvas, '   .', 888)
  } else if (i > 125 && i <= 150) {
    displayTextHeader(canvas, 'PLASH')
    displayTextHeader(canvas, 'SCREEN', 787)
    displayTextHeader(canvas, '  .', 230)
  } else if (i > 150 && i <= 175) {
    displayTextHeader(canvas, 'SPLASH')
    displayTextHeader(canvas, 'SCREENN', 787)
    displayTextHeader(canvas, '         .', 375)
  } else if (i > 175 && i <= 200) {
    displayTextHeader(canvas, 'SPLASH')
    displayTextHeader(canvas, 'SCREENNN', 787)
    displayTextHeader(canvas, '          .', 350)
  }
}

// SCENE ONE B
function splashScreenTwo(canvas) {

  // blue background
  backgroundGradientFive.show(canvas)
  // newSquareThree.show(canvas)
  // displayTextHeader(canvas, '¿¿¿¿¿¿¿')
  // displayTextHeader(canvas, '¿¿¿¿¿¿¿¿¿¿', 787)
  // console.log('splash2::')

  // circle instead
  // backgroundGradientThree.show(canvas)
  // newSquareThree.show(canvas)
  if (i > 200 && i <= 212) {
  }
  else if (i > 212 && i <= 225) {
    displayTextHeader(canvas, '¿¿¿¿¿¿¿¿¿¿')
    displayTextHeader(canvas, '¿¿¿¿¿¿¿¿¿¿', 787)
    displayTextHeader(canvas, '¿¿¿¿¿¿¿¿¿¿', 917)
  } else if (i > 225 && i <= 250) {
    displayTextHeader(canvas, '¿¿')
    displayTextHeader(canvas, '¿¿¿¿', 787)
    displayTextHeader(canvas, '       .', 120)
  } else if (i > 250 && i <= 275) {
    displayTextHeader(canvas, '¿')
    displayTextHeader(canvas, '¿¿¿¿¿¿¿¿¿¿', 787)
    displayTextHeader(canvas, ' ¿¿¿¿¿¿¿¿¿¿', 917)
    displayTextHeader(canvas, '    .', 140)
  } else if (i > 275 && i <= 300) {
  } else if (i > 300 && i <= 325) {
    displayTextHeader(canvas, '¿¿¿¿¿¿¿')
    displayTextHeader(canvas, '¿¿¿¿¿¿¿¿¿¿', 787)
    displayTextHeader(canvas, '   .   ', 220)
  } else if (i > 325 && i <= 350) {

  } else if (i > 350 && i <= 390) {
    displayTextHeader(canvas, '¿¿¿¿¿¿¿¿¿¿')
    displayTextHeader(canvas, '¿¿¿¿¿¿¿¿¿¿', 787)
    displayTextHeader(canvas, '¿¿¿¿¿¿¿¿¿¿', 917)
    // } else if (i > 390 && i <= 400) {
    displayTextHeader(canvas, '   .   ', 520)
  }

}

// SCENE TWO
// Start Screen 
function startScreen(canvas) {
  console.info('SCENE 2: START SCREEN')

  //draw scene
  changeThemeColor('#FF0')
  backgroundGradientTwo.show(canvas)
  newSquareTwo.show(canvas)
  //strobe a color  
  if (!(i % 4)) {
    changeThemeColor('yellow')
  } else {
    changeThemeColor('green')
  }

  // write text to screen
  displayTextHeader(canvas, "START")
  displayTextHeader(canvas, '¿', 777)
  // displayTextHeader(canvas, localStorage.getItem('AG_VISITCOUNT'), 944)
  yellowCircle.show(canvas)

  //display sticker

  yBorderWaiter() //enable top/bottom borders
  // typing animation
}

// SCENE THREE
function gameScreen(canvas) {
  console.info("SCENE 3: GAME SCREEN")
  changeThemeColor("#00FF")
  backgroundGradientThree.show(canvas)
  animatedGradient(canvas)
  displayTextHeader(canvas, "GAME")
}

// SCENE FOUR
// function to stop the animation
function gameOver(canvas) {
  console.info("SCENE 4: GAME OVER")
  changeThemeColor("#FF0000")
  backgroundGradientFour.show(canvas)
  displayTextHeader(canvas, 'GAME')
  displayTextHeader(canvas, 'OVER', 787)

  // stop animating after a while - event handlers will restart it
  // stopAnimation()
  // startAnimation()
}


function yBorderWaiter() {
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
  console.info('y: ' + y)
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
  canvas.font = "145px Fredoka One";
  canvas.fillStyle = "white";
  if (height) {
    canvas.fillText(text, 120, height)
  } else {
    canvas.fillText(text, 120, 666)
  }
}

// mobile only, change browser theme color
function changeThemeColor(color) {
  let themeColor = document.getElementsByTagName('meta')['theme-color']
  themeColor.setAttribute('content', color)
}
