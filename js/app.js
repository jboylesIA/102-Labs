use strict';
console.log('function demo js connected.');


// function functionName(){
// //to do something
// console.log('we are inside a function!');
// }
// functionName();



function userName(){
  let userName = prompt('What is you name');
  console.log('username', userName);
  return document.write(userName);
}
userName();



function timeOfDay(){
  let userTime = prompt('what time is it?');
  let message;

  if(userTime != 11){
    let userTime = prompt('What time is it?');
  } else {
    message = 'Thanks for the time';
  }
 return message;

}

timeOfDay();



/** 
//////////  REVIEW these concepts. 
JavaScript - Coding language of the web. Used to create and control dynamic website content.
conditionals - A series of checks that determine an outcome. If something happens, the do this. If that does not happen but this happens, do this. If all else fails, then do this last thing.
operators - Series of symbols that perform arithmetic on numbers. (+, -, *, **, /, %. ++, --)
data types - A particular kind of data item, integer(number), string (words), boolean (true/false), array. 
There are more advanced data types that will be introduced in 401.
variable - a representation or nick name for some type of data.
*/


function displayRating(){
//code block to do.
let output = '';
let rating = prompt('Scale of 1 to 5, how many stars?');

for(let i = 0;  i < rating; i++){
  output += '<img class="star" src="images/star.png" />'

}

 return document.write(output);
}
displayRating();



function guessANumber() {
  let answer;

  do {
      answer = prompt('Guess a number between 1-10');
      if (answer != 7) {
          alert('try again!')
      } else {
          alert('you are correct!');
      }

  } while (answer != 7)
}