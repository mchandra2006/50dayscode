/*This function checks if a number is even or odd */
function checkEvenorOdd()
        {
            let number = prompt("Enter a number:");
            if (number % 2 === 0) 
            {
                console.log("The number is even.");
            } 
            else {
                console.log("The number is odd.");
            }
        }
        checkEvenorOdd();

/*This function calculates the factorial of a number */
function factorialofnumber()
        {
            let number = prompt("Enter a number to find its factorial:");
            let factorial=1;
            for(let i=1; i<=number; i++)
        {
                factorial *= i;
            }
            console.log(`The factorial of ${number} is ${factorial}.`);
        }
        factorialofnumber();

/*This functions checks the numher is fizz or buzz */
function fizzBuzz()
        {
            let number = prompt("Enter a number:");
            if (number % 3 === 0 && number % 5 === 0)
            {
                console.log("FizzBuzz");
            }
            else if (number % 3 === 0) 
            {
                console.log("Fizz");
            } 
            else if (number % 5 === 0) 
            {
                console.log("Buzz");
            } 
            else 
            {
                console.log(number);
            }
        }

/*This program is about the DOM manipulation */
function DOMmanipulation()
{
    
}        