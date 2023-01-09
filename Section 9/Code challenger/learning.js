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

//get player 1 and player 2 or each team
const [player1,player2] = game.players
console.log(player1,player2)

//2
const[gk1, ...fieldPlayers1] = player1
const[gk2, ...fieldPlayers2] = player1

//3
const allPlayers = [...player1,...player2]
console.log(allPlayers)
//4
const playersFinal = [...player1,'Thiago','Coutinho','Perisic']
//5
const {team1, x: draw,team2} = game.odds
console.log(team1, draw, team2)
//6
game.scorer('duc')
//7
team1 > team2 && console.log('Team 1 win')