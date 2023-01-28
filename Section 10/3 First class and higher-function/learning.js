/* First-class function 
    Js treats function as first-class citizens
    This mean that function are simple values
    function are just another type of Obj

*/
/* Higher-order function
    A function that receives another function as an argument ,that return  a new function, or both
    This is only possible because of first-class function 
*/

//example 
let greet = () => console.log('hello')
let btn 
btn.addEventListener('click', greet) // in here greet we call that is call back and addEventListener is higher-order function