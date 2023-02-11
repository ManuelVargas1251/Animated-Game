////////////////
// ANIMATED GAME
////////////////
//
//

// SETUP 
let animationSpeed = 4  //ms
i = 0   //iteration time in milliseconds
splashLength = 200

// MOUSE
touchClientX = undefined
touchClientY = undefined
touchPressed = false

// TOUCH
mouseClientX = undefined
mouseClientY = undefined
mousePressed = false

// SCENE BOOLS
SCENE_ONE = true
SCENE_TWO = false
SCENE_THREE = false
SCENE_FOUR = false

// DRAW LOOP
function draw() {
    const canvas = document.getElementById('canvas').getContext('2d')
    // console.log('canvas.width: ' +canvas.width)
    // console.log('canvas.height: ' + canvas.height)

    // SCENE 1: SPLASH SCREENS
    if ((SCENE_ONE && i < splashLength) || (SCENE_ONE && !SCENE_FOUR && !SCENE_THREE && !SCENE_TWO)) {
        splashScreens(canvas)
        // SCENE_ONE = true
        console.info('SCENE 1: SPLASH SCREENS')
    }   // fade out

    // SCENE 2: Start Screen
    if (i >= (splashLength + 200) && !SCENE_THREE && !SCENE_FOUR) {
        startScreen(canvas, backgroundGradient)
        SCENE_ONE = false
        SCENE_TWO = true
        console.info('SCENE 2: START SCREEN')
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

// EVENT HANDLERS
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