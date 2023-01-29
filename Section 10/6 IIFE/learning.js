// IIFE Immediately Invoked Function Expresstions
// some time in js we need a function is only executed once and then never again and disappear after call

const runOne =  function (){
    console.log('This will never run again')
}
runOne() // manual way to do , but this functio nnot disapears
// using IIFE we need ; before ()
;(function (){
    console.log('hehehe')
    const private = 3; // private outside or global scope cant access inner side this function
})() 
;(()=> console.log('hehe2'))()
// IIFE and this function is disappear after call once

// 
    