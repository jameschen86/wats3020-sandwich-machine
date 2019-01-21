/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////

let bread = prompt ("What kind of bread would you like? (white, wheat, honey-oat, wholegrain)",`white`)

let meat = prompt ("What kind of meat would you like? (More than one kind meat may be added with use of comma)",`chicken, ham, beef`)

let topping = prompt ("What kind of topping would you like? (Multiple topping can be added with use of comma)",`lettuce, tomato, cheese`)

let condiment = prompt ("What kind of condiments would you like? (Multiple condiments can be added with use of comma)",`mustard, mayonnaise, pepper`)


// Step Two ////////////////////////////////////////////////////////////

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

let meatArray = meat.split(',');
let toppingArray = topping.split(',');
let condimentArray = condiment.split(',');

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

let subtotal = meatCost + toppingCost + condimentCost + prices.sandwich;

let waStateTaxRate = 0.10;
let orderTax = subtotal * waStateTaxRate;

let totalPrice = subtotal + orderTax;

let ten = 0.10;
let fifteen = 0.15;
let twenty = 0.20;
let tipTen = totalPrice * ten;
let tipFifteen = totalPrice * fifteen;
let tipTwenty = totalPrice * twenty;

// Step Three //////////////////////////////////////////////////////////

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meat}</p>
    <p>Toppings: ${topping}</p>
    <p>Condiments: ${condiment}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: ${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: ${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: ${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: ${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Amount: ${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: ${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">SubTotal: ${totalPrice.toFixed(2)}</p>
    <p class="text-right">Tip: $_________</p>
    <p class="text-right">Total: $_________</p>
    <p>---------------------</p>
    <p>Suggested Tip</p>
    <p>10% = ${tipTen.toFixed(2)}</p>
    <p>15% = ${tipFifteen.toFixed(2)}</p>
    <p>20% = ${tipTwenty.toFixed(2)}</p>

`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
