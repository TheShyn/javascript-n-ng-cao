let calcAverageHumanAge= function(ages){
    const agesHuman = ages.map(item=> item <= 2 ? item * 2 : 16 + item * 4 )
    let adultDog = agesHuman.filter(item => item > 18)
    let avageDog = adultDog.reduce((acc,curr,i,arr) => acc + curr / arr.length,0)
    return avageDog

}
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))