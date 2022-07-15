import './styles/main.scss';

const content = document.querySelector('.content');
const header = document.createElement('header')
const restaurantName = document.createElement('div');
const nav = document.createElement('nav');
const home = document.createElement('button');
const menu = document.createElement('button');
const main = document.createElement('main');
const welcome = document.createElement('div');
const seeMenu = document.createElement('button');
const foodMenu = document.createElement('div');
const firstFood = document.createElement('div');
const secondFood = document.createElement('div');
const thirdFood = document.createElement('div');
const fourthFood = document.createElement('div');
const fifthFood = document.createElement('div');
const sixthFood = document.createElement('div');
const seventhFood = document.createElement('div');

//header content
restaurantName.innerText = "Doggo";
home.classList.add('nav-item');
home.innerText = "Home";
menu.classList.add('nav-item');
menu.innerText = "Menu";

//main content
welcome.innerText = "Welcome!";
seeMenu.classList.add('seeMenu')
seeMenu.innerText = "Check Menu";

//food menu 
foodMenu.classList.add('foodMenu')
const foods = [firstFood,secondFood,thirdFood,fourthFood,fifthFood,sixthFood,seventhFood];

foods.forEach((fd) => {
    fd.classList.add('food-item');
    const foodName = document.createElement('div');
    foodName.classList.add('food-name')
    foodName.innerText = 'Dog Food';
    const foodDescription = document.createElement('div');
    foodDescription.classList.add('food-dsc')
    foodDescription.innerText = "I am a dog food so I am only for dog and not for you";
    const buyButton = document.createElement('button');
    buyButton.innerText = "Buy Now";
    fd.append(foodName,foodDescription,buyButton);
})


//nav-button-function
let showMenu = () => {
    content.removeChild(main);
    content.appendChild(foodMenu)
    foods.forEach((fd) => {
        foodMenu.appendChild(fd);
    })
}

home.addEventListener('click', () => {
    content.append(main)
    content.removeChild(foodMenu)
})

menu.addEventListener('click', showMenu)

seeMenu.addEventListener('click', showMenu)

//
nav.append(home,menu);
header.append(restaurantName,nav);
main.append(welcome,seeMenu);
content.append(header,main);