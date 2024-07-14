// A quiz question constructor

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");

question1.showQuestion();

var question2 = new QuizQuestion(
    "Which planet is known as the Red Planet?",
    "Mars"
);

question2.addOption("Earth");
question2.addOption("Mars");
question2.addOption("Jupiter");
question2.addOption("Saturn");

var question3 = new QuizQuestion(
    "Who wrote 'To Kill a Mockingbird'?",
    "Harper Lee"
);

question3.addOption("Harper Lee");
question3.addOption("Mark Twain");
question3.addOption("F. Scott Fitzgerald");
question3.addOption("Ernest Hemingway");



/* Further Adventures
 *
 * 1) Add a fifth option to question1.
 *
 * 2) Create two more questions.
 *
 * 3) At the console prompt type
 *    question2.showQuestion();
 *    Press Enter
 *
 * 4) At the console prompt type
 *    question2.answer;
 *    Press Enter
 *
 */