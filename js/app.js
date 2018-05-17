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
    var answer1 = prompt('Do you think I have any siblings? Please answer with yes (y) or no (n)').toLowerCase();

    if (answer1 === 'yes' || answer1 === 'y') {
        // right answer
        alert('You got it right!!!');
        document.write('<center><br>1. ' + userName + ' That is correct. I have a brother. </br></center>');
        console.log(userName + ' got the correct answer to #1 (yes)');
        score++;
    } else {
        // wrong answer
        alert('Unfortunately, I do');
        document.write('<center><br>1. ' + userName + ' Unfortunately, that was wrong I do have a brother. </br></center>')
        console.log(userName + ' got the wrong answer to #1 (no)');
    };
    // Tell user if they are wrong or right

}; // end function question1()

// Next question (Question 2)
function question2() {
    var answer2 = prompt('Do you think I enjoy music? Please answer with yes (y) or no (n)').toLowerCase();

    if (answer2 === 'yes' || answer2 === 'y') {
        //I enjoy music
        alert('You bet I love music, I am a D.J.!');
        document.write('<center><br>2. ' + userName + ' You bet I love music, I am a D.J.! </br></center>');
        console.log(userName + ' knows I enjoy music.');
        score++;
    } else { //user needs to understand music
        alert('No that is not correct, I enjoy music and I am also a D.J.. ' + userName);
        document.write('<center><br>2. ' + userName + ' who doesn\'t enjoy music </br></center>');
        console.log(userName + ' thinks I hate music.');
    };
}; // end function question2() 

// Next question (question 3)
function question3() {
    var answer3 = prompt('Do you think I served in the Air Force? Please answer with yes (y) or no (n)').toLowerCase();

    if (answer3 === 'yes' || answer3 === 'y') {
        //user knows that I served in the Air Force
        alert('You rock! I served in the Air Force for over 10 years.');
        document.write('<center><br>3. ' + userName + ' You rock! I served in the Air Force for over 10 years. </br></center>');
        console.log(userName + ', knows that I served in the armed forces.');
        score++;
    } else { //user thinks that I did not serve my country
        alert(userName + '! no, that is not correct.');
        document.write('<center><br>3. ' + userName + '! no, that is not correct. I have served over 10 years in the Air Force. </br></center>');
        console.log(userName + ' does not think that I served my country.');
    }
} // end function question3()

// Next question (question 4)
function question4() {
    var answer4 = prompt('Do I enjoy playing board games? Please answer with yes (y) or no (n)').toLowerCase();

    if (answer4 === 'yes' || answer4 === 'y') {
        //user found out I enjoy board games
        alert('I do enjoy board games ' + userName + '');
        document.write('<center><br>4. ' + userName + ' I do enjoy board games. </br></center>');
        console.log(userName + ', found out that I enjoy board games.');
        score++;
    } else { //okay this user does not get out much. lol
        alert(userName + ', well wrong. I do enjoy board games.');
        document.write('<center><br>4. ' + userName + 'that was incorrect, I do enjoy board games. </br></center>');
        console.log(userName + ' really hates the world.');
    }
} // end function question4()

// Next question (question 5)
function question5() {
    var answer5 = prompt('I am guessing that you had enough of these questions? Please answer with yes (y) or no (n)').toLowerCase();

    if (answer5 === 'yes' || answer5 === 'y') {
        //user has had enough
        alert('sorry, I just wanted you to get to know me a little more; however, I have two more questions.');
        console.log(userName + ', has had enough of this.');
    } else { //what is wrong with this user
        alert(userName + ', thanks for getting to know me we still have two more questions.');
        console.log(userName + 'loves the question game.');
    }
} // end function question5()

//Next question (question 6)
function question6() {
    var favoriteNumber = ['1', '11'];
    var counter = 0;
    var wrongAnswer = false;

    while (counter < 5 && wrongAnswer === false) {
        var questionSixAnswer = prompt('I have two favorite numbers 1 through 20 can you guess one? Please utilize a numeric number');
        for (var i = 0; i < favoriteNumber.length; i++) {
            if (questionSixAnswer === favoriteNumber[i]) {
                wrongAnswer = true;
            };
            console.log(questionSixAnswer)
        };

        if (!wrongAnswer) {
            counter++;
            alert('Your guess is incorrect try again ' + userName);
            console.log('wrong answer')
        } else {
            alert(userName + ' That is the correct number');
            document.write('<center><br>5. ' + userName + '' + questionSixAnswer + ' is correct. </br></center>');
            counter += 5;
            score++;
        };
        if (counter === 4) {
            alert(userName + ' ,sorry my favorite numbers are 1 and 11');
            document.write('<center><br>5. ' + userName + ' ,sorry my favorite numbers are 1 and 11. </br></center>');
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
            document.write('<center><br>6. ' + questionSevenAnswer + ' is my favorite type of food. ' + userName + '</br></center>');
        };
        if (counter === (0)) {
            alert('I\'m sorry ' + userName + ' my favorite type of food is Pizza, Cheesburgers or hotdogs');
            document.write('<center><br>6. I\'m sorry ' + userName + ' my favorite type of food is Pizza, Cheesburgers or hotdogs. </br></center>');
            break;
        };
    };
}; // end function for question7()

function displayCorrectAnswers() {
    alert(userName + ' out of the six question you got ' + score + ' correct.');
    document.write('<center><br> ' + userName + ' out of the 6 question you got ' + score + ' correct. </br></center>');
};

question1();
question2();
question3();
question4();
question5();
question6();
question7();
displayCorrectAnswers();