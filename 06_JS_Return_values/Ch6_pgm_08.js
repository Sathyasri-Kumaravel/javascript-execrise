// Getting strings for a player’s health and location

var getPlayerHealth;
var getPlayerPlace;
var showPlayerInfo;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

showPlayerInfo = function (playerName, playerHealth, playerPlace) {
    var healthInfo = getPlayerHealth(playerName, playerHealth);
    var placeInfo = getPlayerPlace(playerName, playerPlace);
    console.log(healthInfo);
    console.log(placeInfo);
};
console.log(getPlayerHealth("Kandra", 50));
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom"));

showPlayerInfo("Dax", 50, "The Bath");
showPlayerInfo("Kandra", 30, "The Enchanted Forest");





/* Further Adventures
 *
 * 1) Create a showPlayerInfo function with three
 *    parameters, playerName, playerHealth and
 *    playerPlace.
 *
 * 2) Call getPlayerHealth and getPlayerPlace
 *    from your new showPlayerInfo function.
 *
 *    e.g. showPlayerInfo("Dax", 50, "The Bath")
 *    should produce the output
 *
 *    Dax has health 50
 *    Dax is in The Bath
 *
 */