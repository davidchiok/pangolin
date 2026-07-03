/*a recusive function is a function that calls
->since this craete an endless loop you need to have a base case that stops the recursion. 
A recursive function is a function that calls

itself. It is used to solve problems that can be broken down into smaller subproblems of the same type. A recursive function typically has two main components: a base case that stops the recursion and a recursive case that continues the recursion.
Here is an example of a simple recursive function that calculates the factorial of a number:
*/
function factorial(n) {
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }


  function sallaryGrossProcess() {
    let gross =prompt("Enter your gross sallary");
    if (isNaN(gross) === false) {
        //condition is met
        console.log(`you enetered this amount ${gross} existing`)
        return; //exit a function
    }
    alert(`invalid gross sallary enetered.eneter a number of gross sallary.try again`);
    sallaryGrossProcess(); //recursion
  }
  sallaryGrossProcess();

  sallaryGrossProcess(); //recursion
