// filter use to filter element that satisfy a certain conditon
let arr = [1,2,3,4,5,6,7,8]
let newarr =arr.filter(item =>{
    return item > 3
})
console.log(arr) // [ 1, 2, 3, 4,5, 6, 7, 8 ]
console.log(newarr)// [ 4, 5, 6, 7, 8 ]