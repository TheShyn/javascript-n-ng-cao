const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300,2000],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
let histories = document.querySelector('.histories')
let balance = document.querySelector('.balance')
const movements = [700,300,-345,3000]
const accounts = [account1, account2, account3, account4];
const displayMovement = function (movements){
    movements.forEach((element,i)=>{
        histories.innerHTML += `
        <div class="history">
            <div class="history_infor">
                <p class="status ${element > 0 ? 'success' : 'err'}">${element > 0 ? 'success' : 'err'}</p>
                <p class="history_time">${i + 1} Day ago</p>
            </div>
            <h4>${element}</h4>
        </div>
        `
    })
}
displayMovement(account1.movements)
const user = 'Steven Thomas Williams'
const createUserNams = function(accs){
    accs.forEach(acc=>{
        acc.username= acc.owner.toLowerCase().split(' ').map(item=>item[0]).join('')
    })
}
createUserNams(accounts)

const calcbalance = function (movements){
    const myBalance = movements.reduce((acc,current)=> acc + current,0)
    balance.textContent = myBalance + ' vnđ'
}
calcbalance(account2.movements)

//max
const max = movements.reduce((acc,curr)=>{
    if(acc > curr) return acc;
    else return curr
},movements[0])
