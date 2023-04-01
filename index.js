
// Write your solution here!


let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  // return cats;
}
// console.log(destructivelyAppendCat("Kitty"));
// [ 'Milo', 'Otis', 'Garfield', 'Kitty' ]

function destructivelyPrependCat(name) {
  cats.unshift(name);
  // return cats;
}
// console.log(destructivelyPrependCat("Kitty"));
// ['Kitty', 'Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastCat() {
  cats.pop();
  // return cats;
}
// console.log(destructivelyRemoveLastCat());
// ['Milo', 'Otis']

function destructivelyRemoveFirstCat() {
  cats.shift();
  // return cats;
}
// console.log(destructivelyRemoveFirstCat());
// ['Otis', 'Garfield']

function appendCat(name) {
  let newCats = cats.slice();
  newCats.push(name);
  return newCats;
}
// console.log(cats);
// console.log(appendCat("Broom"));
// ['Milo', 'Otis', 'Garfield']
// ['Milo', 'Otis', 'Garfield', 'Broom']

function prependCat(name) {
  let newCats = cats.slice();
  newCats.unshift(name);
  return newCats;
}
// console.log(cats);
// console.log(prependCat("Arnold"));
// ['Milo', 'Otis', 'Garfield']
// ['Arnold', 'Milo', 'Otis', 'Garfield']

function removeLastCat() {
  let newCats = cats.slice();
  newCats.pop();
  return newCats;
}
// console.log(cats);
// console.log(removeLastCat());
// ['Milo', 'Otis', 'Garfield']
// ['Milo', 'Otis']


function removeFirstCat() {
  let newCats = cats.slice();
  newCats.shift();
  return newCats;
}
// console.log(cats);
// console.log(removeFirstCat());
// ['Milo', 'Otis', 'Garfield']
// ['Otis', 'Garfield']
