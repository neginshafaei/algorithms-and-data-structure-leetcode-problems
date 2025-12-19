/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) {
        return true
    }
    let currentFlowerbed = [...flowerbed];
    
    for (i = 0; i < currentFlowerbed.length; i ++) {
        const currEmpty = currentFlowerbed[i] === 0
        const prevEmpty = currentFlowerbed[i - 1] === 0 || i === 0
        const nextEmpty = currentFlowerbed[i + 1] === 0 || i === currentFlowerbed.length - 1

        if (currEmpty && nextEmpty && prevEmpty) {
            currentFlowerbed[i] = 1
            n --
        }

        if (n === 0) {
            return true
        }
    }
    return false

};