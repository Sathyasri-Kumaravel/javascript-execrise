// A collection of functions that return values

var getMessage;
var getHelloTo;
var sum;
var totalCost;

getMessage = function () {
    return "I’m going on an adventure!"; 
};
getMessage();


getHelloTo = function (name) {
    return "Hello to " + name;
};
getHelloTo("Dax");
getHelloTo("Mic");
getHelloTo("Alice");
getHelloTo("nick");

sum = function (number1, number2) {
    return number1 + number2
};
sum(10, 20);
sum(0, -20);
sum(9.0, 7.9);

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    return callOutCharge + costPerHour * numberOfHours;
};

totalCost(30, 40, 3);
totalCost(60,78,65);
totalCost(187,10,0);

console.log(getMessage());
console.log(getHelloTo("Alice"));
console.log(sum(15, 36));
console.log("$" + totalCost(50, 70, 65));

/* Further Adventures
 *
 * 1) Run the program.
 *
 * There is nothing logged to the console.
 * However, the functions will now be
 * available for calling.
 *
 * 2) At the console prompt, type
 *    getMessage()
 *    and press enter.
 *
 * The return value of the function is
 * logged to the console.
 *
 * 3) At the console prompt, type
 *    getHelloTo("Dax")
 *    and press enter.
 *
 * The argument, "Dax", forms part of the
 * return value.
 *
 * 4) Call the getHelloTo function
 *    with different arguments.
 *
 * 5) Call the sum and totalCost functions,
 *    using different arguments each time.
 *
 */