const game ={
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'toidaidot1',
            'toidaidot2',
            'toidaidot3',
            'toidaidot4',
            'toidaidot5',
            'toidaidot6',
            'toidaidot7',
            'toidaidot8',
            'toidaidot9',
            'toidaidot10',
            'toidaidot11',
        ],
        [
            'shyn1',
            'shyn2',
            'shyn3',
            'shyn4',
            'shyn5',
            'shyn6',
            'shyn7',
            'shyn8',
            'shyn9',
            'shyn10',
            'shyn11',
        ],
    ],
    score: '4.0',
    srored:['shyn10','shyn7','toidaidot1','toidaidot2','toidaidot3'],
    date: 'Nov 9th, 2023',
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
    scorer : function(...players){
        console.log(...this.srored,...players)
    }
}
//1
for(let [i, scorer] of game.srored.entries()){
    console.log(`Goat ${i+1}: ${scorer}`)
}
//2
let odds = Object.values(game?.odds) 
let ave = 0
for (let odd of odds){
    // console.log(odd)
    ave += odd
}
ave/=odds.length
console.log(ave)
//3

for (let [name, value] of Object.entries(game.odds)){
    const check = name === 'x' ? 'draw' : 'thắng của ' + game[name]
    console.log(`Tỉ lệ ${check} là ${value}`)
}