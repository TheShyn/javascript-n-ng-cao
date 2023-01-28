const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase()
}
const uppercaseFirstWord = (str)=>{
    const [first, ...rest] = str.split(' ')
    return [first.toUpperCase(), ...rest].join(' ')
}
/// higher-order function (using callback)
const transformer = (str, fn)=>{
    console.log(fn(str))
    console.log(fn.name)
}
transformer('Javascript is the best', uppercaseFirstWord)
transformer('Javascript is the best', oneWord)

const high5 = ()=>{
    console.log('Hello')
}

document.body.addEventListener('click',high5)