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

function addData(user) {
    data.push(user);

    updateDOM();
}

// Passing a default function parameter
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = `  <h2><strong>  Person  </strong> Wealth </h2>` ;
    providedData.forEach(item =>{
        const div = document.createElement('div');
        

    })
}