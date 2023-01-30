let arr = [1,3,4,5,6,7,76,76]

for(let a of arr){ // if u want to have index we have to do this arr.entries()
    console.log(a)
}

arr.forEach(function(element,index,arr){ // (each element of arr , index, arr) u cant stop looping of foreach
    console.log(element,index,arr)
})