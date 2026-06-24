/*senario 1:
1.declare a variable <of your choice<assign a truthy value create an if statement and put a variable
inside the if statement condition(<variable>).in side the if console.log("senario 1 it run")

senario 2:declare a variable of your choice and assign a falsey value
create an if statement and put a variable inside the if statement.inside the if console.log("senario 2 it run")

senario3:create the if statement inside the if statement part.have true
inside the block({}) console.log("senario 3 its run")

senario 4:create an if statemnet inside an if statement conditions part.have false.
inside the block({}) console.log (senario 4 it run)
senario 5:
1.create an if statement inside the statement condition part.10>20
inside the block({})console.log (senario 5 it run)
senario 6:create an if statement inside the if statement condition part.have 20>10
inside the block({}) console.log(senario 6 it run)

*/

// Scenario 1: Truthy value
let name = "Dave";

if (name){    console.log("Scenario 1 it run");
}

// Scenario 2: Falsy value
let emptyValue = "";

if (emptyValue) {   console.log("Scenario 2 it run");
}

// Scenario 3: Condition is true
if (true) {   console.log("Scenario 3 it run");
}

// Scenario 4: Condition is false
if (false) {   console.log("Scenario 4 it run");
}

// Scenario 5: 10 > 20 (false)
if (10 > 20) {   console.log("Scenario 5 it run");
}

// Scenario 6: 20 > 10 (true)
if (20 > 10) { console.log("Scenario 6 it run");
}