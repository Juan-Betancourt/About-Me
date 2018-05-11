"use strict";
var userName = prompt('Hi! What is your name!');
// Ask for user's name

alert('Hi ' + userName + ', thanks for stopping by!');
// Greet the user by name in an alert

console.log('The user said their name is ' + userName);
// log to the console

//========Score card=======
var score = 0;

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
        document.write('1. ' + userName + 'That is correct. I have a brother.');
        console.log('' + userName + ' got the correct answer to #1 (yes)');
        score++;
    } else {
        // wrong answer
        alert('Unfortunately, I do');
        document.write('1. ' + userName + ' Unfortunately, that was wrong I do have a brother.')
        console.log('' + userName + ' The user got the wrong answer to #1 (no)');
    };
    // Tell user if they are wrong or right

}; // end function question1()

// Next question (Question 2)
function question2() {
    var answer2 = prompt('Do I like music?').toLowerCase();

    if (answer2 === 'yes' || answer2 === 'y') {
        //I enjoy music
        alert('You bet I love music, I am a D.J.!');
        document.write('2. ' + userName + ' You bet I love music, I am a D.J.!');
        console.log('' + userName + ' got the correct answer.');
        score++;
    } else { //user needs to understand music
        alert('Well that is incorrect, I enjoy music. ' + userName);
        document.write('2. ' + userName + ' who doesn\'t enjoy music');
        console.log('' + userName + ' got the answer wrong');
    };
}; // end function question2() 

// Next question (question 3)
function question3() {
    var answer3 = prompt('Do I enjoy vacations?').toLowerCase();

    if (answer3 === 'yes' || answer3 === 'y') {
        //user knows that I enjoy going on vacation
        alert('You rock! I am looking forward to my next vacation in (Jamaica)');
        document.write('3. ' + userName + ' You rock! I am looking forward to my next vacation in (Jamaica)');
        console.log(userName + ', knows that I enjoy vacations.');
        score++;
    } else { //user hates going on vacation
        alert(userName + '! no, that is not correct.');
        document.write('3. ' + userName + '! no, that is not correct. We all love vacations');
        console.log(userName + ' hates the world.');
    }
} // end function question3()

// Next question (question 4)
function question4() {
    var answer4 = prompt('Do I enjoy playing board games?').toLowerCase();

    if (answer4 === 'yes' || answer4 === 'y') {
        //user found out I enjoy board games
        alert('I do enjoy board games ' + userName + '');
        document.write('4. ' + userName + ' I do enjoy board games');
        console.log('' + userName + ', found out that I enjoy board games.');
        score++;
    } else { //okay this user does not get out much. lol
        alert('' + userName + ', well I do enjoy board games.');
        document.write('4. ' + userName + 'that was incorrect, I do enjoy music');
        console.log('' + userName + ' really hates the world.');
    }
} // end function question4()

// Next question (question 5)
function question5() {
    var answer5 = prompt('I am guessing that you had enough of these questions?').toLowerCase();

    if (answer5 === 'yes' || answer5 === 'y') {
        //user has had enough
        alert('sorry, I just wanted you to get to know me a little more; however I have two more questions.');
        console.log('5. ' + userName + ', has had enough of this.');
    } else { //what is wrong with this user
        alert('' + userName + ', thanks for getting to know me we still have two more questions.');
        console.log('5. ' + userName + 'loves the question game.');
    }
} // end function question5()

//Next question (question 6)
function question6() {
    var favoriteNumber = ['1', '5'];
    var counter = 0;
    var wrongAnswer = false;

    while (counter < 5 && wrongAnswer === false) {
        var questionSixAnswer = prompt('What are my favorite numbers 1 through 10?');
        for (var i = 0; i < favoriteNumber.length; i++) {
            if (questionSixAnswer === favoriteNumber[i]) {
                wrongAnswer = true;
            };
            console.log(questionSixAnswer)
        };

        if (!wrongAnswer) {
            counter++;
            alert('Your guess is incorrect try again ' + userName);
            console.log('wrongAnswer')
        } else {
            alert(userName + ' That is the correct number');
            document.write('6. ' + userName + '' + questionSixAnswer + ' is correct');
            counter += 5;
            score++;
        };
        if (counter === 4) {
            alert(userName + ' ,sorry my favorite numbers are 1 and 5');
            document.write('6. ' + userName + ' ,sorry my favorite numbers are 1 and 5');
            break;
        };

    };
}; // end function question6()

function question7() {
    var answerArray = ['pizza', 'cheeseburger', 'hotdog'];
    var counter = 6;
    var didTheyGetIt = false;

    while (counter >= 0 && didTheyGetIt === false) {
        var questionSevenAnswer = prompt('what is my favorite type of food').toLowerCase();
        console.log('Before running the loop')
        for (var i = 0; i < answerArray.length; i++) {
            if (questionSevenAnswer === answerArray[i]) {
                didTheyGetIt = true;
                console.log('for loop')
            };
        };

        if (!didTheyGetIt) {
            counter--;
            alert('That is not my favorite type of food, please try again ' + userName + '. You have ' + counter + ' tries left.');
            console.log(userName + ' did not guess my food correctly.');
        } else {
            alert(questionSevenAnswer + ' is my favorite type of food ' + userName);
            counter--;
            score++;
            document.write('7. ' + questionSevenAnswer + ' is my favorite type of food ' + userName);
        };
        if (counter === 0) {
            alert('I\'m sorry ' + userName + 'my favorite type of food is Pizza, Cheesburgers or hotdogs');
            document.write('7. I\'m sorry ' + userName + 'my favorite type of food is Pizza, Cheesburgers or hotdogs');
            break;
        };
    };
}; // end function for question7()

function displayCorrectAnswers() {
    alert(userName + ' out of the six question you got ' + score + ' correct.');
    document.write(userName + ' out of the 6 question you got ' + score + ' correct.');
};

question1();
question2();
question3();
question4();
question5();
question6();
question7();
displayCorrectAnswers();