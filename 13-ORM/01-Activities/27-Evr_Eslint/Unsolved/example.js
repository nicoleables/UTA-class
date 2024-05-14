var num_1 =  parseInt(prompt('Give me a number!'))
var num_2 = parseInt(prompt("Give me another number!"))
var result;

var operation = prompt('What would you like to do? (add, subtract, multiply, divide)').toUpperCase();

if (operation == "ADD") {
     var result = num_1 + num_2;
  alert('The sum of ' + num_1 + " and " + num_2 + " is " + result);
} else if (   operation === 'SUBTRACT') 
{
result = num_1 - num_2;
alert('The difference between ' + num_1 + " and " + num_2 + " is " + result);
} 
else if (operation === "MULTIPLY") {
    result = num_1 * num_2;
    alert('The product of ' + num_1 + " and " + num_2 + " is " + result);
} else if (operation === "DIVIDE") {
result = num_1 / num_2;
  alert('The quotient of ' + num_1 + " and " + num_2 + " is " + result);
} else {
alert("Not a valid option!");
}
//This helps everyone code the same way to read and understand everyones code faster it is called a linter
//eslint is a library to enforce rules and has all the rules you have to follow
//this is like styling for our code
//it is looking at it throught dev dependences
//vs code picks up thr rules and is enforcing you to follow by them
//the eslintignore will ignore the node modules(ignore certain stuff)

