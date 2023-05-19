// class Sticker {
//     fruitSticker() {
//         // setup sticker storage
//         stickerStorage()
//     }
//     stickerStorage() {
//         // console.info("Fruit Sticker")
//         if (!localStorage.getItem('AG_PLAYER')) {
//             localStorage.setItem('AG_PLAYER', '001')
//             localStorage.setItem('AG_VISITCOUNT', '1')
//             // localStorage.setItem('AG_FRUITSTICKER_1', 'false')
//         } else {
//             let visitCount = JSON.parse(localStorage.getItem('AG_VISITCOUNT'))
//             visitCount = String(Number(visitCount) + 1)
//             localStorage.setItem('AG_VISITCOUNT', visitCount)
//         }
//         //localStorage.removeItem()
//         //localStorage.key()
//         //localStorage.length()
//     }
// }

// class FruitSticker extends Sticker {
//     display() {

//     }
// }
// class LegumeSticker extends Sticker {
//     display() {
    
//     }
// class SnackSticker extends Sticker {
//     display() {
    
//     }
// class VegiSticker extends Sticker {
//     display() {
    
//     }
// }