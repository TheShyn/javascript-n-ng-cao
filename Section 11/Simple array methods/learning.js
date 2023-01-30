// because arrays in js are objs so we have some methods for array (build-in function)
//simple methods
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)) //[ 'c', 'd', 'e' ] slice return [ 'c', 'd', 'e' ] NOT delete
console.log(arr) // ['a', 'b', 'c', 'd', 'e']
//splice method (start , how many elements we want delete)
console.log(arr.splice(2,3)) //[ 'c', 'd', 'e' ]
console.log(arr) // ['a', 'b'] splice delete [ 'c', 'd', 'e' ]

//reverse
const newArr = [1,3,4,5,6,7]
console.log(newArr.reverse()) // [ 7, 6, 5, 4, 3, 1 ]
console.log(newArr) // [ 7, 6, 5, 4, 3, 1 ]
// concat
const letters = newArr.concat(arr)
console.log(letters) // [7, 6, 5, 4, 3, 1, 'a', 'b']
// concat the same with spread
console.log(...newArr,...arr) //[7, 6, 5, 4, 3, 1, 'a', 'b']
// join
console.log(newArr.join('-')) //7-6-5-4-3-1