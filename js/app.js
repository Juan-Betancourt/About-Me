// Ask for user's name
var userName = prompt('Hi! What is your name!');

// Greet the user by name in an alert
alert('Hi ' + userName + ', thanks for stopping by!');

// log that to the console
console.log('The user said their name is ' + userName);

// Ask the first guessing game question (Question 1)
var answer1 = prompt('Do you think I have any siblings?').toLowerCase();
// user guess "yes/no or "Y/N"

// if (condition is true ){
//     do this stuff
// } else {
//     do this stuff
// }

if (answer1 === 'yes' || answer1 === 'y') {
    // right answer
    alert('You got it right!!!');
    console.log('The user got the correct answer to #1 (yes)');
} else {
    // wrong answer
    alert('Unfortunately, I do');
    console.log('The user got the wrong answer to #1 (no)');
}
// Tell user if they are wrong or right

// Next question (Question 2)

var answer2 = prompt('Do I like music?').toLowerCase();

if (answer2 === 'yes' || answer2 === 'y') {
    //user enjoys music
    alert('You bet I love music, I am a D.J.!');
    console.log('' + userName + ' got the correct answer.');
} else { //user has no taste for music
    alert('' + userName + ' well that is incorrect, I enjoy music.');
    console.log('' + userName + ' got the answer wrong');
}

// Next question (question 3)

var answer3 = prompt('Do I enjoy vacations?').toLowerCase();

if (answer3 === 'yes' || answer3 === 'y') {
    //user knows that I enjoy going on vacation
    alert('You rock! I am looking forward to my next vacation (Jamaica)');
    console.log('' + userName + ', knows that I enjoy vacations.');
} else { //user hates going on vacation
    alert('' + userName + '! no, that is not correct.');
    console.log('' + userName + ' hates the world.');
}

// Next question (question 4)

var answer4 = prompt('Do I enjoy playing board games?').toLowerCase();

if (answer4 === 'yes' || answer4 === 'y') {
    //user found out I enjoy board games
    alert('I do enjoy board games ' + userName + '');
    console.log('' + userName + ', found out that I enjoy board games.');
} else { //okay this user does not get out much. lol
    alert('' + userName + ', well I do enjoy board games.');
    console.log('' + userName + ' really hates the world.');
}

// Next question (question 5)

var answer5 = prompt('I am guessing that you had enough of these questions?').toLowerCase();

if (answer5 === 'yes' || answer5 === 'y') {
    //user has had enough
    alert('sorry, I just wanted you to get to know me a little more; howeever I have two mor questions.');
    console.log('' + userName + ', has had enough of this.');
} else { //what is wrong with this user
    alert('' + userName + ', thanks for getting to know me we still have two more questions.');
    console.log('' + userName + 'loves the question game.');
}

// Next question (question 6)

var answer6 = Number('What is my favorite number 1 through 5?').toLowerCase();

if (isNaN(answer6) || typeof answer6 === "1") {
    //correct number 
    alert('' + userName + ' that is the correct number');
    console.log('' + userName + ', got the correct answer.');
} else { //wrong answer
    alert('' + userName + ', sorry that is not the correct number.');
    console.log('' + userName + 'loves the question game.');
}