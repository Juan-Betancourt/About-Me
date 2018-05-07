"use strict"
var userName = prompt('Hi! What is your name!');
// Ask for user's name

alert('Hi ' + userName + ', thanks for stopping by!');
// Greet the user by name in an alert

console.log('The user said their name is ' + userName);
// log to the console


// Ask the first guessing game question (Question 1)
function question1() {
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
        console.log('' + userName + ' got the correct answer to #1 (yes)');
    } else {
        // wrong answer
        alert('Unfortunately, I do');
        console.log('' + userName + ' The user got the wrong answer to #1 (no)');
    }
    // Tell user if they are wrong or right

} // end function question1()

// Next question (Question 2)
function question2() {
    var answer2 = prompt('Do I like music?').toLowerCase();

    if (answer2 === 'yes' || answer2 === 'y') {
        //I enjoy music
        alert('You bet I love music, I am a D.J.!');
        console.log('' + userName + ' got the correct answer.');
    } else { //user needs to understand music
        alert('' + userName + ' well that is incorrect, I enjoy music.');
        console.log('' + userName + ' got the answer wrong');
    }
} // end function question2() 

// Next question (question 3)
function question3() {
    var answer3 = prompt('Do I enjoy vacations?').toLowerCase();

    if (answer3 === 'yes' || answer3 === 'y') {
        //user knows that I enjoy going on vacation
        alert('You rock! I am looking forward to my next vacation (Jamaica)');
        console.log('' + userName + ', knows that I enjoy vacations.');
    } else { //user hates going on vacation
        alert('' + userName + '! no, that is not correct.');
        console.log('' + userName + ' hates the world.');
    }
} // end function question3()

// Next question (question 4)
function question4() {
    var answer4 = prompt('Do I enjoy playing board games?').toLowerCase();

    if (answer4 === 'yes' || answer4 === 'y') {
        //user found out I enjoy board games
        alert('I do enjoy board games ' + userName + '');
        console.log('' + userName + ', found out that I enjoy board games.');
    } else { //okay this user does not get out much. lol
        alert('' + userName + ', well I do enjoy board games.');
        console.log('' + userName + ' really hates the world.');
    }
} // end function question4()

// Next question (question 5)
function question5() {
    var answer5 = prompt('I am guessing that you had enough of these questions?').toLowerCase();

    if (answer5 === 'yes' || answer5 === 'y') {
        //user has had enough
        alert('sorry, I just wanted you to get to know me a little more; however I have two more questions.');
        console.log('' + userName + ', has had enough of this.');
    } else { //what is wrong with this user
        alert('' + userName + ', thanks for getting to know me we still have two more questions.');
        console.log('' + userName + 'loves the question game.');
    }
} // end function question5()

// Next question (question 6)
function question6() {
    var favoriteNumber;
    var counter = 0;
    favoriteNumber = ['1'];
    var wrongAnswer = true;

    do {
        var questionSixAnswer = Number('What is my favorite number 1 through 5?');
        for (var j = 0; 1 < favoriteNumber.length; j++) {
            if (questionSixAnswer === favoriteNumber[j]) {
                break;
            }
        }
        counter++;

    } while (counter < 4 && wrongAnswer);

    if (wrongAnswer) {
        alert('You gave it for tries, unfortunately the answer is 1.')
        console.log('' + userName + ', has the wrong answer.');
    } else {
        alert('It took you ' + counter + ' tries, my favorite number is 1 ' + userName + '')
        console.log('' + userName + ', has the correct answer.');
    }
} // end function question6()

function question7() {

    var answerArray = ['pizza', 'cheeseburger', 'hotdog'];
    var counter = 0;
    var notAnsweredCorrectly = true;

    do {
        var questionSevenAnswer = prompt('What is my favorite type of foods').toLowerCase();
        for (var i = 0; 1 < answerArray.length; i++) {
            if (questionSevenAnswer === answerArray[i]) {
                break;
            };
        };
        counter++;

    } while (counter < 6 && notAnsweredCorrectly);

    if (notAnsweredCorrectly) {
        alert('It took you six tries but you failed')
        console.log('' + userName + ', has the wrong answer.');
    } else {
        alert('It took you ' + counter + ' tries, my favorite food is Pizza, Cheeseburgers, and Hotdogs')
        console.log('' + userName + ', has the correct answer.');
    }
} // end function for question7()

question1();
question2();
question3();
question4();
question5();
question6();
question7();