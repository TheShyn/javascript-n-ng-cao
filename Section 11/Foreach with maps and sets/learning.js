const map = new Map([
    [1,'dasd'],
    [2,'hehehe']
]);
map.forEach((element,index)=>{ 
    console.log(element,index); // dasd 1  hehehe 2
})
//its working
//Set
const set  = new Set(['dsa','3ff','aDS'])
set.forEach((ele,index)=>console.log(ele,index)) // dsa dsa, 3ff 3ff, aDs (index and value the same value)
//its working