// Displaying a player's name

var showPlayerName;

showPlayerName = function (playerName) {
    console.log("The Player's name is " + playerName);
    console.log("The name has " + playerName.legth + "letter."); 
};

showPlayerName("Kandra");
showPlayerName("Dax");



/* Further Adventures
 *
 * 1) Update the text logged so that it is
 *    of the form:
 *    The player's name is Kandra
 *
 * Strings have a length property that gives
 * the number of characters in the string.
 * e.g. playerName.length.
 *
 * 2) Make the function show the number
 *    of letters in the player's name.
 *
 */