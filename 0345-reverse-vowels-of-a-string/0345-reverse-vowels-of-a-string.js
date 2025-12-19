/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let char = s.split('')

    let left = 0
    let right = char.length - 1

    while (left < right) {

        while (left < right && !vowels.includes(char[left])) {
            left ++
        }

        while (left < right && !vowels.includes(char[right])) {
            right --
        }

        if (left < right) {
            [char[left], char[right]] = [char[right], char[left]]
            right --
            left ++
        }
    }
    return char.join('')
};