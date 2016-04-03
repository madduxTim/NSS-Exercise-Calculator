// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.
var output = document.getElementById("output");
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");

/*  Create a function that multiplies two numbers passed in as arguments. Return the product. */
function multiplyStuff(first, second) {
    return first * second;
};
multiplyButton.addEventListener("click", function() {
    output.innerHTML = "";
    output.innerHTML = multiplyStuff(document.getElementById("input1").value, document.getElementById("input2").value); 
});

/* Create a function that adds two numbers passed in as arguments. Return the sum. */
function addStuff(first, second) {
    return parseInt(first) + parseInt(second);
};
addButton.addEventListener("click", function() {
    output.innerHTML = "";
    output.innerHTML = addStuff(document.getElementById("input1").value, document.getElementById("input2").value); 
});

/* Create a function that subtracts two numbers passed in as arguments. Return the difference. */
function subtractStuff(first, second) {
    return first - second;
};
subtractButton.addEventListener("click", function() {
    output.innerHTML = "";
    output.innerHTML = subtractStuff(document.getElementById("input1").value, document.getElementById("input2").value); 
});

/* Create a function that divides two numbers passed in as arguments. Return the quotient. */
function divideStuff(first, second) {
    return first / second;
};
divideButton.addEventListener("click", function() {
    output.innerHTML = "";
    output.innerHTML = divideStuff(document.getElementById("input1").value, document.getElementById("input2").value); 
});

/* Create a function that accepts three arguments. Return the value of the operation.
        1. First number
        2. Second number
        3. A function that performs an operation on them */
function totalCalculator(food, tax, tip) {
    return ((food * tax)) + (food * tip) + food;
};

function tax() {
    return (0.08).toFixed(2);
};

function tip() {
    return (0.2).toFixed(2);
};

document.getElementById("tipButton").addEventListener("click", function() {
    output.innerHTML = totalCalculator(parseInt(document.getElementById("input1").value), tax(), tip()) + "<p>Here's your total, assuming a 20% tip.</p>";
});

document.getElementById("tipButton").addEventListener("mouseover", function() {
    if (document.getElementById("input1").value === "" && document.getElementById("input1").value === "") {
        document.getElementById("input1").value = "'enter food cost'";
        document.getElementById("input2").value = "taxes are = " + tax();
        document.getElementById("input1").focus();
    };
});