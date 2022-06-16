'use strict';
console.log('app is connected.');

let userInput;

function userName(){


    userInput = prompt('What is your name?');
    console.log('The user name: ',userInput);

    return userInput;


}



userName();


console.log(userInput);

document.write(userInput + ' Hello');