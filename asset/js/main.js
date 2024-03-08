// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


// crea un div 
const wrapper = document.createElement('div');

// aggiungi le classi 
wrapper.className = 'd-flex justify-content-between align-content-center flex-wrap';
console.log(wrapper);
// aggiungi un ID 
wrapper.setAttribute('Id', 'main-box');
console.dir(wrapper);

// determina il numero massimo di celle
let maxBox = 100
// dichiaro il template html vuoto
let tmpHtml = '';

// ciclo for 
for (i = 1; i <= maxBox; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        tmpHtml += ` <div class="box">${"FizzBuzz"}</div>`;
        //console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        tmpHtml += ` <div class="box">${"Fizz"}</div>`;
        //console.log("Fizz");
    } else if (i % 5 === 0) {
        tmpHtml += ` <div class="box buzz">${"Buzz"}</div>`;
        //console.log("Buzz");
    } else {
        tmpHtml += ` <div class="box">${i}</div>`;
        //console.log(i);
    }
}

wrapper.innerHTML = tmpHtml;

const container = document.querySelector('.container');
container.append(wrapper);
