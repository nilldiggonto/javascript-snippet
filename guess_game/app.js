const cardArray = [
    {
        name:'fries',
        img:'https://cdn3.iconfinder.com/data/icons/food-and-drink-color/64/Food_fastfood_potato_restaurant_cooking_french_fries_pack-256.png'
    },
    {
        name:'pizza',
        img:'https://cdn3.iconfinder.com/data/icons/food-and-drink-color/64/food_pizza_fastfood_snack_italian_fat_restaurant-256.png'
    },
    {
        name:'ice-cream',
        img:'https://cdn2.iconfinder.com/data/icons/food-184/512/icecream_cone_Chocolate-Chips_food-128.png'
    },
    {
        name:'cocaCola',
        img:'https://cdn2.iconfinder.com/data/icons/food-desserts-drinks-and-sweets/512/soda-256.png'
    },
    {
        name:'beef',
        img:'https://cdn1.iconfinder.com/data/icons/cuisine-food/128/food-restaurant-meal-steak-meat-grilled-cooked-256.png'
    },
    {
        name:'cake',
        img:'https://cdn3.iconfinder.com/data/icons/bakery-kitchen-3/512/00_Bakery__Sweet.pdf-35-256.png'
    },
    {
        name:'fries',
        img:'https://cdn3.iconfinder.com/data/icons/food-and-drink-color/64/Food_fastfood_potato_restaurant_cooking_french_fries_pack-256.png'
    },
    {
        name:'pizza',
        img:'https://cdn3.iconfinder.com/data/icons/food-and-drink-color/64/food_pizza_fastfood_snack_italian_fat_restaurant-256.png'
    },
    {
        name:'ice-cream',
        img:'https://cdn2.iconfinder.com/data/icons/food-184/512/icecream_cone_Chocolate-Chips_food-128.png'
    },
    {
        name:'cocaCola',
        img:'https://cdn2.iconfinder.com/data/icons/food-desserts-drinks-and-sweets/512/soda-256.png'
    },
    {
        name:'beef',
        img:'https://cdn1.iconfinder.com/data/icons/cuisine-food/128/food-restaurant-meal-steak-meat-grilled-cooked-256.png'
    },
    {
        name:'cake',
        img:'https://cdn3.iconfinder.com/data/icons/bakery-kitchen-3/512/00_Bakery__Sweet.pdf-35-256.png'
    },
]

cardArray.sort(()=> 0.5 - Math.random()); //sort array randomly

const cardDisplay = document.querySelector('#customCard');
let cardChoosen = []
let cardChooseIds = []
let cardWon = []
const resultDisplay = document.querySelector('#result')

function createBorad(){
    for (let i=0; i< cardArray.length; i++){
        const card = document.createElement('div')
        card.setAttribute('class','col-3 card c-height')
        card.setAttribute('id','card' + i)
        // let miniCard = document.querySelector('#card'+i);
        // const mcard = document.createElement('')
        // card.setAttribute('src','https://cdn3.iconfinder.com/data/icons/bakery-kitchen-3/512/00_Bakery__Sweet.pdf-35-256.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        card.innerHTML = `
        <img data-id= ${i} src='https://cdn4.iconfinder.com/data/icons/set-1/32/__22-256.png'>
        `

        cardDisplay.appendChild(card)
    }
}

createBorad();

function checkMatch(){
    // console.log(cardChooseIds)
    // const cardImg = document.querySelectorAll('#customCard img');
    const card1 = document.querySelector('#card'+cardChooseIds[0])
    const card2 = document.querySelector('#card'+cardChooseIds[1])

    // console.log(cardImg[cardChooseIds[0]])
    // console.log(cardImg[cardChooseIds[1]])
    

    if(cardChoosen[0] == cardChoosen[1]){
        // alert('This is a match');
        card1.removeEventListener('click',flipCard)
        card2.removeEventListener('click',flipCard)
        cardWon.push(cardChoosen)
   
    }else{
        card1.innerHTML = `<img  src='https://cdn4.iconfinder.com/data/icons/emoji-18/61/23-256.png'>`
        card2.innerHTML = `<img  src='https://cdn4.iconfinder.com/data/icons/emoji-18/61/23-256.png'>`
    }
    cardChoosen = []
    cardChooseIds = []
    resultDisplay.innerHTML = cardWon.length;
    if (cardWon.length == cardArray.length/2){
        resultDisplay.innerHTML = "CONGRTS! YOU DID IT"
    }
    // console.log(cardWon)
    // console.log(cardWon.length)
    // console.log(cardArray.length/2)


}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    
    cardChooseIds.push(cardId)
    cardChoosen.push(cardArray[cardId].name)
    this.innerHTML = `
    <img data-id= ${cardId} src='${cardArray[cardId].img}'>
    `
    if (cardChoosen.length == 2){
        setTimeout(checkMatch,500);
    }


    // console.log(cardChoosen)
    // console.log('click'+cardId)
}