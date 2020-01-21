function displayCards(){
    for(var i = 0; i < cards.length; i++){
        document.getElementById('cards').innerHTML += cards[i];

        if(i != cards.length - 1){
            document.getElementById('cards').innerHTML += ', ';
        }
    }
}

function displayHand(cards){
    for(var i = 0; i < cards.length; i++){
        document.getElementById('cards').innerHTML += cards[i];

        if(i != cards.length - 1){
            document.getElementById('cards').innerHTML += ', ';
        }
    }

    document.getElementById('cards').innerHTML += "<br>";
}



function initializeDeck(deck){
    var value = 1;
    var counter = 0;

    for(var i = 0; i < 52; i++){
        if(counter == 4){
            value++;
            counter = 0;
        }

        deck.push(value);
        counter++;
    }
}

function shuffleDeck(deck){
    for(var i = 0; i < 52; i++){
        var r = i + Math.floor(Math.random() * (0, 52 - i));
        var temp = deck[r];
        deck[r] = deck[i];
        deck[i] = temp;
    }
}

function replacePairs(hand){
    for(var i = 0; i < hand.length; i++) {
        for(var j = i; j < hand.length; j++) {
            if(hand[i] == hand[j] && i != j){
                if(cards.length >= 2){
                    hand[i] = cards.shift();
                    hand[j] = cards.shift();
                }
                else{
                    document.getElementById('cards').innerHTML += "<br>";
                    document.getElementById('cards').innerHTML += "You lose";
                    document.getElementById('butt').disabled = true;
                }
                
            }
        }
    }
}

function buttonPressed(){
    counter++;

    if(counter == 52){
        document.getElementById('butt').disabled = true;
        document.getElementById('cards').innerHTML += "<br>";
        document.getElementById('cards').innerHTML += "You win!";
    }

    if(table.length >= 8 && !hasPair(table)){
        going = false;
        console.log(table);
        document.getElementById('cards').innerHTML += "<br>";
        document.getElementById('cards').innerHTML += "You lose";
        document.getElementById('butt').disabled = true;
    }
    else if(table.length <= 8 && hasPair(table)){
        replacePairs(table);
        console.log("replace pair");
        console.log(table);
        displayHand(table);
        
    }
    else{
        var card = cards.shift();
        table.push(card);
        console.log(table);
        displayHand(table);
    }
}

function hasPair(hand){
    if(hand.length <= 1) {
        return false;
    }
    
    for(var i = 0; i < hand.length; i++) {
        for(var j = i; j < hand.length; j++) {
            if(hand[i] == hand[j] && i != j){
                return true;
            }
        }
    }
    
    return false;
}

var going = true;
var counter = 0;
var table = [];
var cards = [];

initializeDeck(cards);
shuffleDeck(cards);












