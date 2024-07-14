// Finding substrings

var message = "We choose to go to the Moon!";

console.log(message.substr(3, 12));
console.log(message.substr(18)); 
console.log(message.substr(11, 6)); 
console.log(message.substr(0, 10));

console.log(message.substr(3)); 

console.log(message.substr(-5)); 
console.log(message.substr(-12, 7)); 

/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */