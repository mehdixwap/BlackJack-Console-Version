var suits, gameOn, currentDeck, userHand, dealerHand;

suits = ["❤", "♦", "♣", "♠"];
gameOn = false;


var Card = function(value, suit) {
    this.value = value;
    this.suit = suit;
    this.print = function() {
        console.log(value + suit);  
    };
    this.viewCard = function() {
        return this.suit + this.value;
    }
}

var Deck = function() {
    this.cards = [];
    
    for (var i=0; i<52; i++){
        var card = new Card(getCardFromValue(i), getSuitFromValue(i));
        this.cards.push(card);
    };
    
    this.deal = function() {
        var ri = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(ri, 1);
    };
    
    this.print = function() {
        for (var i=0; i<52; i++){
            this.cards[i].print();
        }          
    };
}

function newGame() {
    currentDeck = new Deck();
    gameOn = true;
    userHand = [];
    dealerHand = [];
    
    for (var i=0; i<4; i++) {
        var tmp = currentDeck.deal();
        userHand.push(tmp);
        document.getElementById("user-hand").innterText += tmp.viewCard();
    }
}

document.getElementById('new-game').addEventListener("click", newGame);


///////////////////
// HELPER FUNCTIONS
///////////////////

// When a card is dealt it is given a number from the deck from 1-52, this function will get the appropriate value. 
function getCardFromValue(x){
    if ((x%13) === 0) {
        return 13;
    } else {
        return (x%13);
    }
}

function getSuitFromValue(x) {
    if (x < 14) {
        return suits[0];
    } else if (x < 27) {
        return suits[1];
    } else if (x < 40) {
        return suits[2];
    } else {
        return suits[3];
    } 
}

