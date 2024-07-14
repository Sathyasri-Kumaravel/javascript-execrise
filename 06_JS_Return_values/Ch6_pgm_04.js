// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var addThree = function (number1, number2, number3) {
	var total = number1 + number2 + number3;
    return total;
};

var sum = add(50, 23);
console.log(sum);

var sum = add(add(50, 23), 30);
console.log(sum);

sum = addThree(10,50,70);
console.log("The sum of 10,50 and 70 is" + sum);



/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */