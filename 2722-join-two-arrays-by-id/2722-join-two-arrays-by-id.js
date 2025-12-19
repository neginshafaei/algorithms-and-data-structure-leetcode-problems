/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let resultObj = {}

    for (const obj of arr1) {
        resultObj[obj.id] = obj
    }

    for (const obj of arr2) {
        resultObj[obj.id] = {...resultObj[obj.id], ...obj}
    }

    console.log(Object.values(resultObj))
    return Object.values(resultObj)
};