/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = []
    const maxCandies = Math.max(...candies)

    for (const candy of candies) {
        if (candy + extraCandies >= maxCandies) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
};