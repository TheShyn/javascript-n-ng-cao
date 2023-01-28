const flights = 'LH234' // primitive
const jonas = {
    name:'Jonas',
    passport: 213124123
} // reference

const checkIn = function (flightNum, passenger){
    flightNum = 'LH999'
    passenger.name = 'MR.' + passenger.name
    if(passenger.passport === 213124123){
        alert('Check in ')
    }else{
        alert('Wrong passport')
    }
}
checkIn(flights,jonas)


let flightNum = flights // its just the copy value of flights to flightNum (we call that is primitive)
let newObj = jonas // its the same value with jonas so if change any value of newObj the value of jonas will be change the same because jonas and newObj to poin the same object (we call that is reference)
//Numbers, boolean values, and the null and undefined types are primitive
// Objects, arrays, and functions are reference types.


const newPassport = function (person){
    person.passport = Math.trunc(Math.random() * 1000000000)
}
newPassport(jonas)
checkIn(flights,jonas)

