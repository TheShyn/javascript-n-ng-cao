const movement = [200,300,400,1000]
const eurToUsd = 1.1
//using map method
let newarr = movement.map((item,index)=> (item * eurToUsd).toFixed(1)
)
console.log(newarr);
// manual way to create new arr
let arr = []
for(let item of movement){
    arr.push(item * eurToUsd)
}
console.log(arr)