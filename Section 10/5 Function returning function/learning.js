const greet =  (greeting)=>{
    return (name)=>{
        console.log(`${name} say ${greeting}`)
    }
}
greet('hello')('das')
