let card = []
let sum = 0
let startEl = document.getElementById("start-el")
console.log(startEl)
let newEl = document.getElementById("new-el")
console.log(newEl)
let cardEl = document.getElementById("card-el")
console.log(cardEl)
let sumEl = document.getElementById("sum-el")
console.log(sumEl)
let message = ""
let messageEl = document.getElementById("message-el")
console.log(messageEl)

function RandomCard(){
let RandomCard = Math.floor(Math.random()*13) + 1;

if(RandomCard> 10){return 10}
else if (RandomCard === 1){return 11}
else{ return RandomCard}


}
let isAlive = true
let HasBlackJack = false 

console.log(RandomCard())

function startGame(){
    let firstCard = RandomCard()
    let secondCard = RandomCard()
    card = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < card.length; i++){
        cardEl.textContent += card[i] + " "
    }
    sumEl.textContent = "Sums: " + sum
    if(sum < 21){
        message = "want to draw another card?"
    } else if(sum === 21){
        message = "you got blackjack!"
        HasBlackJack = true
    } else {
        message = "game over :("
 isAlive = false
}
            messageEl.textContent = message
}

function newCard(){
    //if ( HasBlackJack === false && isAlive === true){
    let cards = RandomCard()
    sum += cards
    card.push(cards)
    renderGame()}
