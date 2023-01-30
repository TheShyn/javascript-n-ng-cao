;(function(){
    const h1 = document.querySelector('h1')
    h1.style.color = 'red'
    document.body.addEventListener('click',() => h1.style.color = 'blue')
})()
// when this function run line 2 and 3 gone and function gone but the event still in the body and wait for click