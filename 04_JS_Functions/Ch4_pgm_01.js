// Displaying an object's properties on the console

var movie1, movie2;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};
movie2 = {
  title: "theri",
  actors: "vijay, samantha",
  directors: "Atle"
};
function displaymovieInfo(movie1){
console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");
}
function displaymovieInfo(movie2){
console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");
}

displaymovieInfo(movie1);
displaymovieInfo(movie2);

blogpost ={
  title: "blog",
  content: "bday",
  date: "04-11-2004"
}

function displayblogInfo(post){
  console.log("Blog Post" + post.title);
  console.log("------------------------------");
  console.log("date: " + post.actors);
  console.log("content: " + post.directors);
  console.log("------------------------------");
  }
  
displayblogInfo(blogpost);
/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */