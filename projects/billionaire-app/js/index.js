const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');


let data = [];


async function getRandonUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }
    addData(newUser);
}

// Double Money 
function doubleMoney() {
    data = data.map(user => {
        return {
            ...user,
            money: user.money * 2
        }
    })
    updateDOM();
}

// Sort by Richest 
function sortRichest() {
    data.sort((a, b) => b.money - a.money)
    updateDOM();
}


// Calcuate Wealth 
function calculateWealth() {
   const wealth = data.reduce((acc, user) =>(acc +=user.money), 0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3> Total Wealth : <strong> ${formatMoney(wealth)} </strong></h3>`;
    main.appendChild(wealthEl);
}

// show millionaires 
function showMillionaires(){
    const millionaiers = data.filter(millionMoney =>{
        return millionMoney.money > 999999 ;
    })
    console.log(millionaiers);
}


function addData(user) {
    data.push(user);

    updateDOM();
}

// Passing a default function parameter
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = `  <h2><strong>  Person  </strong> Wealth </h2>`;
    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
        main.appendChild(element);
    })
}

// format number as money 
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}



const addUserNew = addUserBtn.addEventListener('click', getRandonUser);
const doublemonery = doubleBtn.addEventListener('click', doubleMoney);
const sortRichestPerson = sortBtn.addEventListener('click', sortRichest);
const calculateWealthB = calculateWealthBtn.addEventListener('click', calculateWealth);
const showbillionaires = showMillionairesBtn.addEventListener('click', showMillionaires);

