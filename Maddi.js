//this is the deck. For now, each player's deck is hard coded
const cards = [
    { cardNumber: 6, type: 'h' },
    { cardNumber: 9, type: 'd' },
    { cardNumber: 2, type: 'h' },
    { cardNumber: 9, type: 'h' },
    { cardNumber: 14, type: 'h' },
    { cardNumber: 6, type: 'c' },
    { cardNumber: 2, type: 'd' },
    { cardNumber: 9, type: 's' },
    { cardNumber: 12, type: 'h' },
    { cardNumber: 10, type: 'c' },
    { cardNumber: 14, type: 'c' },
    { cardNumber: 7, type: 'd' },
    { cardNumber: 3, type: 's' },
    { cardNumber: 8, type: 'd' },
    { cardNumber: 12, type: 's' },
    { cardNumber: 7, type: 's' },
    { cardNumber: 7, type: 'c' },
    { cardNumber: 14, type: 'd' },
    { cardNumber: 11, type: 'c' },
    { cardNumber: 10, type: 's' },
    { cardNumber: 11, type: 'd' },
    { cardNumber: 4, type: 'd' },
    { cardNumber: 2, type: 's' },
    { cardNumber: 7, type: 'h' },
    { cardNumber: 14, type: 's' },
    { cardNumber: 10, type: 'h' },
    { cardNumber: 5, type: 'c' },
    { cardNumber: 12, type: 'c' },
    { cardNumber: 6, type: 's' },
    { cardNumber: 5, type: 's' },
    { cardNumber: 12, type: 'd' },
    { cardNumber: 4, type: 'h' },
    { cardNumber: 11, type: 'h' },
    { cardNumber: 13, type: 'c' },
    { cardNumber: 5, type: 'h' },
    { cardNumber: 6, type: 'd' },
    { cardNumber: 13, type: 's' },
    { cardNumber: 13, type: 'd' },
    { cardNumber: 8, type: 'c' },
    { cardNumber: 4, type: 's' },
    { cardNumber: 13, type: 'h' },
    { cardNumber: 2, type: 'c' },
    { cardNumber: 8, type: 's' },
    { cardNumber: 10, type: 'd' },
    { cardNumber: 3, type: 'c' },
    { cardNumber: 3, type: 'h' },
    { cardNumber: 11, type: 's' },
    { cardNumber: 8, type: 'h' },
    { cardNumber: 9, type: 'c' },
    { cardNumber: 5, type: 'd' },
    { cardNumber: 3, type: 'd' },
    { cardNumber: 4, type: 'c' } ];


var player1Deck = [];
var player2Deck = [];

player1Deck = cards.slice();
player2Deck = player1Deck.splice(1, 26);

console.log(player1Deck);
console.log(player2Deck);

// //Function to randomly grab cards for player
// var pcv = Math.floor(Math.random() * player1Deck.length);
// var player1Card = player1Deck[pcv];
//
// var pcv2 = Math.floor(Math.random() * player2Deck.length);
// var player2Card = player2Deck[pcv2];
var resetButton = document.getElementById("reset");

var player1Card;
var player2Card;
var pcv;
var pcv2;

function grabRand1 () {

    // return player1Card + player2Card;
    //Function to randomly grab cards for player
    pcv = Math.floor(Math.random() * player1Deck.length);
    player1Card = player1Deck[pcv];

    pcv2 = Math.floor(Math.random() * player2Deck.length);
    player2Card = player2Deck[pcv2];

}

// function grabRan2 (player2Card){
//     return player2Card;
// }

//Genertates new Set of Cards and resets scores. this function will be applied to reset button
function reset() {
    var cards = new Array();
    var typeArray = ["s", "d", "c", "h"];
    var cardNumberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

    for (let i = 0; i < typeArray.length; i++) {
        for (let x = 0; x < cardNumberArray.length; x++) {
            let card = {cardNumber: cardNumberArray[x], type: typeArray[i]};
            cards.push(card);
        }
    }

    for (var i = 0; i < 10000; i++) {
        let rand1 = Math.floor((Math.random() * cards.length));
        let rand2 = Math.floor((Math.random() * cards.length));
        let tmp = cards[rand1];
        cards[rand1] = cards[rand2];
        cards[rand2] = tmp;
        var player1Deck = [];
        var player2Deck = [];

        player1Deck = cards.slice();
        player2Deck = player1Deck.splice(1, 26);
    }


    document.getElementById("P1Score").innerText=0;
    document.getElementById("P2Score").innerText=0;
    score1=0;
    score2=0;
    console.log(player1Deck);
    console.log(player2Deck);
}
resetButton.addEventListener("click", reset);