var suits = suits = ["❤", "♦", "♣", "♠"];
var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var Card = function(suit, number, value) {
    this.suit = suit;
    this.number = number;
    this.value = value;
};

Card.prototype.toString = function() {
    console.log(this.suit + this.number + " has value " + this.value);
};

var Deck = function() {
    this.deck = [];
    for(var i=0; i<suits.length; i++) {
        for (var j=0; j<cards.length; j++) {
            var temp = new Card(suits[i], cards[j], getValueOfCardNumber(cards[j]));
            this.deck.push(temp);
        }
    }
};

Deck.prototype.drawCard = function() {
    var rand = Math.ceil(Math.random()*this.deck.length);
    return this.deck.splice(rand, 1);
}

Deck.prototype.toString = function() {
    for (var i=0; i<this.deck.length; i++) {
        this.deck[i].toString();
    }
}

function balance(x) {
    var balance = x;
    return function(win, bet) {
        balance += win*bet;
        return balance;
    }
}

var Hand = function() {
    this.cards = [];
    this.hand = score();
};

Hand.prototype.hit  = function(card) {
    this.cards.push(card);
    this.hand(card.value);

    for (var i=0; i<cards.length; i++) {
        cards[i].toString();
    }
    console.log(this.hand(0));
};

Hand.prototype.stay = function() {
    console.log(this.hand(0));  
};

function score() {
    var score = 0;
    return function(hitAmt) {
        score += hitAmt;
        return score;
    }
}

////////////////////
/// Helper Functions
////////////////////

function getValueOfCardNumber(card) {
    if ((card > 1) && (card <11)) {    
        return parseInt(card); 
    } else if (card === "A") {
        return [1,11];
    } else {
        return 10;
    }
}

/////////////
// TEST CODE
/////////////

var deck = new Deck();

var dealer = new Hand();
dealer.hit(deck.drawCard());



