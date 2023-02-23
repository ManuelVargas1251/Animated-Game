////////////////
// ANIMATED GAME
////////////////
//
//

// SETUP
fruitSticker()  //initialize
//eventHandler
let animationSpeed = 4  //ms
i = 0   //current iteration time in milliseconds
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

    // SCENE 1: SPLASH SCREENS
    if (SCENE_ONE && i <= 400) {
        splashScreens(canvas)
        if (i >= 400) {
            SCENE_ONE = false
            SCENE_TWO = true
        }
    }   // fade out

    // SCENE 2: Start Screen
    if (SCENE_TWO) {
        startScreen(canvas)
    }

    // SCENE 3: GAME
    if (SCENE_THREE) {
        gameScreen(canvas)
    }

    // SCENE 4: END
    if (SCENE_FOUR) {
        gameOver(canvas)
    }
    i++
}
let myInterval = setInterval(draw, animationSpeed)  // loop every 4 milliseconds

// EVENT HANDLERS
function sceneEvents() {
    // Move to Scene 3: Game
    if (SCENE_TWO) {
        SCENE_TWO = false
        SCENE_THREE = true
    }
    // Move to Scene 2: Start Game
    if (SCENE_FOUR) {
        // printScenes('SCENE_FOUR_before')
        SCENE_FOUR = false
        SCENE_TWO = true
        // printScenes('SCENE_FOUR_after')
    }
}

// MOUSE LISTENERS
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
addEventListener('click', (event) => {
    sceneEvents()
})

// TOUCH LISTENERS
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
    // touchPressed = true
    touchClientX = event.touches[0].clientX
    touchClientY = event.touches[0].clientY
    sceneEvents()
})

function printScenes(msg) {
    if (msg) { console.info(msg) }
    console.info('- SCENE_ONE:', SCENE_ONE)
    console.info('- SCENE_TWO: ', SCENE_TWO)
    console.info('- SCENE_THREE: ', SCENE_THREE)
    console.info('- SCENE_FOUR: ', SCENE_FOUR)
}

// event handler instead?
//on bool change?
// function sceneChange(){
    
//     return bool
// }

function startAnimation() {
    if (!myInterval) {
        try {
            myInterval = setInterval(draw, animationSpeed)
            return 'animation started!'
        } catch (e) {
            console.error('error: animation Not started! ' + e)
            return 'animation NOT started!'
        }
    }
}

function stopAnimation() {
    if (myInterval) {
        clearInterval(myInterval)
        return 'animation stopped!'
    }
    return 'animation NOT stopped!'
}

function exitAnimation() {
    window.close();
}