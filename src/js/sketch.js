// Animated Game
// SETUP 
let animationSpeed = 4
// MOUSE N TOUCH
touchClientX = undefined
touchClientY = undefined
touchPressed = false
mouseClientX = undefined
mouseClientY = undefined
mousePressed = false
// SCENE BOOLS
SCENE_ONE = true
SCENE_TWO = false
SCENE_THREE = false
SCENE_FOUR = false

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


// let canvas = document.getElementById('canvas')
// console.log('canvas.width: ' +canvas.width)
// console.log('canvas.height: ' + canvas.height)
let i = 0
// j = 0
// draw loop    
function draw() {
    const canvas = document.getElementById('canvas').getContext('2d')

    let splashLength = 200

    /*
    */
    // SCENE 1: SPLASH SCREENS
    // console.log('i: ' + i)
    if ((SCENE_ONE && i < splashLength) || (SCENE_ONE && !SCENE_FOUR && !SCENE_THREE && !SCENE_TWO)) {
        splashScreens(canvas)
        // SCENE_ONE = true
        console.info('SCENE 1: SPLASH SCREENS')
    } 
    // fade out


    // SCENE 2: Start Screen
    if (i >= (splashLength + 200) && !SCENE_THREE && !SCENE_FOUR) {
        startScreen(canvas, backgroundGradient)
        SCENE_ONE = false
        SCENE_TWO = true
        console.info('SCENE 2: START SCREEN')
        // console.log('SCENE_TWO: ' + SCENE_TWO)
        // if(j == 0){
        //     j = splashLength
        // }else
    }

    // SCENE 3: GAME
    if (SCENE_THREE) {
        gameScreen(canvas)
        console.info("SCENE 3: GAME SCREEN")
    }

    // SCENE 4: END
    if (SCENE_FOUR) {
        gameOver(canvas)
        console.info("SCENE 4: GAME OVER")
    }
    i++
}
let myInterval = setInterval(draw, animationSpeed)  // loop the animation every 4 milliseconds

// touch events when touch/click event
function sceneEvents() {

    // Move to Scene 3: Game
    if (SCENE_TWO) {
        SCENE_TWO = false
        SCENE_THREE = true
    }

    // Move to Scene 2: Start Game
    if (SCENE_FOUR) {
        SCENE_FOUR = false
        SCENE_THREE = false
        SCENE_TWO = false
        SCENE_ONE = true
    }
}
// input event handlers
// when click or touch
addEventListener('mousedown', (event) => {
    // console.info('mouse pressed', event)
    mousePressed = true
})
addEventListener('mouseup', (event) => {
    // console.info('mouse released', event)
    mousePressed = false
})
addEventListener('mousemove', (event) => {
    mouseClientX = event.clientX
    mouseClientY = event.clientY
    // console.info('mouse moved', event.clientX, event.clientY)
})
//mouse click
addEventListener('click', (event) => {
    sceneEvents()
})
addEventListener('touchstart', (event) => {
    // console.info('touch pressed', event)
    touchPressed = true
})
addEventListener('touchend', (event) => {
    // console.info('touch released', event)
    touchPressed = false
    sceneEvents()
})
addEventListener('touchmove', (event) => {
    // console.info('touch moved', event.touches[0].clientX, event.touches[0].clientY)
    // console.info('touchPressed', touchPressed)
    // touchPressed = true
    touchClientX = event.touches[0].clientX
    touchClientY = event.touches[0].clientY
    sceneEvents()
})