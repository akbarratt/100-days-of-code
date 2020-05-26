// Demonstration of var's global scope

let x = 10;
let y = 10
var z = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + y + z);
// → 40

// Demonstration of scope
const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

// Nested scope example
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
   };
   ingredient(1, "can", "chickpeas");
   ingredient(0.25, "cup", "tahini");
   ingredient(0.25, "cup", "lemon juice");
   ingredient(1, "clove", "garlic");
   ingredient(2, "tablespoon", "olive oil");
   ingredient(0.5, "teaspoon", "cumin");
};

console.log(hummus);