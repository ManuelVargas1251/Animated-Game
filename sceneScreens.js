// SCENE ONE
function splashScreens(canvas) {
  // let j = 0

  splashScreenOne(canvas);
  // testInterface(canvas); //test visibility
  // splashScreenTwo(canvas)
  // ++j
  // console.log('j: ' + j )
}

// SCENE ONE A
function splashScreenOne(canvas) {
  backgroundGradientThree.show(canvas)

  displayTextHeader(canvas, 'SPLASH')
  displayTextHeader(canvas, 'SCREEN', 787)
  // if enough time has passed, fade to black, load next scene
}
// SCENE ONE B
function splashScreenTwo(canvas) {
  displayTextHeader(canvas, 'SPLASH')
  displayTextHeader(canvas, 'SCREEN 2', 787)
}



// SCENE TWO
// Start Screen 
function startScreen(canvas, backgroundGradient) {
  // canvas.clearRect(0, 0, 1200, 1600)
  changeThemeColor('#FF0')
  backgroundGradientTwo.show(canvas)
  newSquareTwo.show(canvas)
  // draw button
  // write text to screen
  displayTextHeader(canvas, "START")
  displayTextHeader(canvas, '¿', 777)
  yellowCircle.show(canvas)
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

