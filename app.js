const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    },

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

const resultDisplay = document.querySelector('#result')

let cardsChosen= []
let cardsChosenId= []
let cardsWon= []

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function flipCard(){

    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src',cardArray[cardId].img)
    cardsChosenId.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenId)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}

function checkMatch(){

    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    //if your project bigger you can use #id with property
   const cards= document.querySelectorAll('#grid img')

   if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('You have clicked the same image!')
   }

    if(cardsChosen[0] == cardsChosen[1] ){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        cardsWon.push(cardsChosen)

    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry try again!')
    }
    cardsChosen= []
    cardsChosenId= []

    resultDisplay.textContent = cardsWon.length

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all!'
    }

}