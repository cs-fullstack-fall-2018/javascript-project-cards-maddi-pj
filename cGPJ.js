let button1 = document.getElementById("P1Button");
let score1 = 0;
let score2 = 0;

// An if/else statement that declares a winner
function winner()
{
    grabRand1();
    if (player1Card.cardNumber>player2Card.cardNumber)
        {
            console.log("Player 1 wins");
            console.log("Player 1: ", player1Card, "Player 2: ", player2Card);
            score1=score1+1;
            document.getElementById("P1Score").innerText=score1;
            player1Deck.splice(pcv,1);
            player2Deck.splice(pcv2,1);
            console.log(player1Deck);

        }

    else
        {
            console.log("Player 2 wins");
            console.log("Player 2: ", player2Card, "Player 1: ", player1Card);
            score2=score2+1;
            document.getElementById("P2Score").innerText=score2;
            player1Deck.splice(pcv,1);
            player2Deck.splice(pcv2,1);
            console.log(player2Deck);
        }
}

button1.addEventListener("click", winner);