const checkDog = function (dogsJulia,dogsKate){
    let dogsJuliaCorrected = dogsJulia.slice()
    dogsJuliaCorrected.splice(0,1)
    dogsJuliaCorrected.splice(-1,2)
    let newArr = [...dogsJuliaCorrected,...dogsKate]
    newArr.forEach((item,i)=>{
        console.log(`Chó số ${i+1} là chó ${item > 5 ? 'lớn':'con'}`)
    })
}
checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
checkDog( [9, 16, 6, 8, 3],  [10, 5, 6, 1, 4])