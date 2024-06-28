let hasBlackjack
let isAlive
let cardarr=[]
let sum = 0
let msg = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomNumber(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if (randomNumber>10){
        return 10
    }
    else if(randomNumber===1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cardarr=[firstCard,secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    sumEl.textContent="Sum: "+sum;
    cardsEl.textContent="Cards:"
    for(let i=0; i<cardarr.length; i++){
    cardsEl.textContent+=cardarr[i] + " "
    }
    if (sum < 21) {
        msg = "Do you want to draw another card?";
        isAlive=true
        hasBlackjack=false
    } else if (sum === 21) {
        msg = "You got a blackjack";
        hasBlackjack=true
    } else {
        msg = "You're out of the game";
        isAlive=false
    }
    console.log(msg); 
    messageEl.textContent = msg;
}

function newCard(){
    if(isAlive===true && hasBlackjack===false){
    let thirdCard=getRandomNumber();
    sum+=thirdCard;
    cardarr.push(thirdCard)

    renderGame()
    }
}

