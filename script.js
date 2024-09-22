function greetUser() {
  const name = document.querySelector('.name-input').value;
  document.querySelector('.greeting-output').innerText = `Ahoj, ${name}!`;
}

function calculateSum() {
  const num1 = parseFloat(document.querySelector('.num1-input').value);
  const num2 = parseFloat(document.querySelector('.num2-input').value);
  document.querySelector('.sum-output').innerText = `Součet: ${num1 + num2}`;
}

function compareNumbers() {
  const num1 = parseFloat(document.querySelector('.compare1-input').value);
  const num2 = parseFloat(document.querySelector('.compare2-input').value);
  const result = num1 > num2 ? `${num1} je větší než ${num2}` :
                 num1 < num2 ? `${num2} je větší než ${num1}` : "Obě čísla jsou stejná";
  document.querySelector('.compare-output').innerText = result;
}

function checkEvenOdd() {
  const num = parseInt(document.querySelector('.even-odd-input').value);
  document.querySelector('.even-odd-output').innerText = num % 2 === 0 ? "Sudé číslo" : "Liché číslo";
}

function checkAge() {
  const age = parseInt(document.querySelector('.age-input').value);
  let message = age >= 18 ? "Uživatel je plnoletý" :
                age >= 15 ? `Uživatel bude plnoletý za ${18 - age} let` : 
                `Uživatel bude plnoletý za ${18 - age} let`;
  document.querySelector('.age-output').innerText = message;
}

function printNumbers() {
  document.querySelector('.numbers-output').innerText = Array.from({length: 100}, (_, i) => i + 1).join(", ");
}

const names = ["Samuel", "Vojtěch", "Mikuláš", "Tomáš", "Martin"];
function printNames() {
  document.querySelector('.names-output').innerText = names.join(", ");
}

function sortNames() {
  document.querySelector('.sorted-names-output').innerText = [...names].sort().join(", ");
}

const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
function arrayAverage() {
  const average = randomNumbers.reduce((acc, num) => acc + num, 0) / randomNumbers.length;
  document.querySelector('.average-output').innerText = `Průměr: ${average}`;
}

function greet(name) {
  document.querySelector('.greet-output').innerText = `Ahoj, ${name}!`;
}

const numberArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
function sortArray() {
  document.querySelector('.sorted-array-output').innerText = `Seřazené pole: ${[...numberArray].sort((a, b) => a - b).join(", ")}`;
}

const person = { name: "Karlo", age: 43, introduce() { return `Jmenuji se ${this.name} a je mi ${this.age} let.`; }};
function introducePerson() {
  document.querySelector('.person-output').innerText = person.introduce();
}

const car = { brand: "Toyora", model: "Crown", year: 2025, describe() { return `${this.brand} ${this.model}, rok výroby ${this.year}`; }};
function describeCar() {
  document.querySelector('.car-output').innerText = car.describe();
}

const books = [{ title: "Hobit", author: "J.R.R. Tolkien", year: 1937 }, { title: "1984", author: "George Orwell", year: 1949 }, { title: "Kdo chytá v žitě", author: "J.D. Salinger", year: 1951 }];
function listBooks() {
  document.querySelector('.books-output').innerText = books.map(book => book.title).join(", ");
}

document.querySelector('.change-text-btn').addEventListener('click', () => {
  document.querySelector('.change-text-output').innerText = "Text byl změněn!";
});

document.querySelector('.quote-btn').addEventListener('click', () => {
  const quotes = ["Život je to, co se děje, když jste zaneprázdněni jinými plány. – John Lennon", "Buď změnou, kterou chceš vidět ve světě. – Mahátma Gándhí", "Lepší pozdě než nikdy. – Neznámý autor", "Štěstí není cíl, ale způsob života. – Buddha"];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.querySelector('.quote-output').innerText = randomQuote;
});

document.querySelector('.calc-add-btn').addEventListener('click', () => {
  const num1 = parseFloat(document.querySelector('.calc-num1').value);
  const num2 = parseFloat(document.querySelector('.calc-num2').value);
  document.querySelector('.calc-output').innerText = `Výsledek: ${num1 + num2}`;
});

document.querySelector('.calc-subtract-btn').addEventListener('click', () => {
  const num1 = parseFloat(document.querySelector('.calc-num1').value);
  const num2 = parseFloat(document.querySelector('.calc-num2').value);
  document.querySelector('.calc-output').innerText = `Výsledek: ${num1 - num2}`;
});

document.querySelector('.user-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = document.querySelector('.user-input').value;
  const userOutput = document.querySelector('.user-output');
  userOutput.innerText = `Vítejte, ${userName}!`;
});

document.querySelector('.greet-btn').addEventListener('click', greetUser);
document.querySelector('.sum-btn').addEventListener('click', calculateSum);
document.querySelector('.compare-btn').addEventListener('click', compareNumbers);
document.querySelector('.even-odd-btn').addEventListener('click', checkEvenOdd);
document.querySelector('.age-btn').addEventListener('click', checkAge);
document.querySelector('.print-numbers-btn').addEventListener('click', printNumbers);
document.querySelector('.print-names-btn').addEventListener('click', printNames);
document.querySelector('.sort-names-btn').addEventListener('click', sortNames);
document.querySelector('.average-btn').addEventListener('click', arrayAverage);
document.querySelector('.greet-person-btn').addEventListener('click', () => {
  const name = document.querySelector('.greet-name-input').value;
  greet(name);
});
document.querySelector('.sort-array-btn').addEventListener('click', sortArray);
document.querySelector('.introduce-person-btn').addEventListener('click', introducePerson);
document.querySelector('.describe-car-btn').addEventListener('click', describeCar);
document.querySelector('.list-books-btn').addEventListener('click', listBooks);
