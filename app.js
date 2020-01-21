function displayCards(){
    for(var i = 0; i < cards.length; i++){
        document.getElementById('cards').innerHTML += cards[i];

        if(i != cards.length - 1){
            document.getElementById('cards').innerHTML += ', ';
        }
    }
}

function displayHand(cards){
    var counter = 0;
    document.getElementById('cards').innerHTML =  "";

    for(var i = 0; i < cards.length; i++){
        counter++;

        if(counter == 5){
            document.getElementById('cards').innerHTML += "<br>";
        }

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
    var p;
    document.getElementById('rep').innerHTML = "";
    
    for(var i = 0; i < hand.length; i++) {
        for(var j = i; j < hand.length; j++) {
            if(hand[i] == hand[j] && i != j){
                if(cards.length >= 2){
                    p = hand[i];
                    document.getElementById('rep').innerHTML += "replace " + p + "'s";
                    hand[i] = cards.shift();
                    counter++;
                    hand[j] = cards.shift();
                    counter++;
                    return;
                }
                else{
                    ded= true;
                    return;
                }
                
            }
        }
    }

    
}

function buttonPressed(){
    if(counter == 52){
        document.getElementById('butt').disabled = true;
        document.getElementById('cards').innerHTML += "<br>";
        document.getElementById('cards').innerHTML += "You win!";
        return;
    }

    if(table.length >= 8 && !hasPair(table)){
        going = false;
        console.log(table);
        document.getElementById('cards').innerHTML += "<br>";
        document.getElementById('cards').innerHTML += "You lose";
        document.getElementById('butt').disabled = true;
        return;

    }
    else if(table.length <= 8 && hasPair(table)){
        replacePairs(table);
        if(ded){
            document.getElementById('cards').innerHTML += "<br>";
            document.getElementById('cards').innerHTML += "You lose";
            document.getElementById('butt').disabled = true;
            return;
        }
        console.log("replace pair");
        console.log(table);
        displayHand(table);
        
    }
    else{
        var card = cards.shift();
        table.push(card);
        document.getElementById('rep').innerHTML = "";
        document.getElementById('rep').innerHTML = card + " drawn";
        counter++;
        console.log(table);
        displayHand(table);
    }
    console.log(cards);
    console.log(counter);
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
var ded = false;

initializeDeck(cards);
shuffleDeck(cards);












