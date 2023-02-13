// reduce method use to essentially boild down all elements in an array to single value
const arr = [100,345,654,24,768]
let result = arr.reduce((accumilator, current)=>{
    return accumilator + current
},0) //init value if we doesnt set init value for accumulator , it will be the first value of arr
console.log(result) //1891