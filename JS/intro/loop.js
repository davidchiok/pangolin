
/*

create a funciton @function1<give it any name>.
it does not take any parameters this function
1. prompts a user for the first number
check if number is a valid number greater than 1.
2. prompts a user for the second number check if number is a valid number greater than 1. use recussion or a while loop to ensure
user enters a correct number for number1 and number 2
after the number is enterd call @function2‹> which takes the numbers as parameters. example-> @function2(number1, number 2)
create a funciton @function2<give it any name›. this funciton takes in the following parameter @param1 number greater than 1. @param2 number greater than 1.
check if @param1 is a number greater than 1. check if @param is a number greater than 1. example if @function2(3,5)
create a maths table for it. upto ie console Logs
-----
3*5=
3*4=
3*2=
3*1=
2*5=
2*4=
2*3=
2*1=
1*5=
1*4=
1*3=
1*2=
*/








function promptStudent () El
let num1 = null;
let num2 = null;
while (true) {
num1 = prompt("Enter the first number");
if (isNaN(num1)) }
continue; //restart the Loop
num2 = prompt("Enter the second number");
if (isNaN(num2)){
continue; //restart the Loop from begining
num1 = parseInt(num1);
num2 - parseInt(num2);
if (num1 < = 0 || num2<=0) {
continue; //
}
break;
console. log("Got valid number", num1, num2);
mathTable(num1, num2);
H
function mathTable(num1, num2) 
if (Inum1 || num1 < e || Inum2 || num2 < e) {
console. error ("Ensure number1 or number2 are numbers greater than 0"); return;
}
let outerLoop = num1; 1/2
while (outerLoop > 0) {
doInnerLoop(outerLoop, num2); //
outerLoop = outerLoop - 1;
// while (outerLoop > 0) {
Let innerLoop = num2; 1/3 //3
while (innerLoop>e)(
console. Log(outerLoop-$(outerLoop} innerLoop-$(innerLoop});
console. Log("$(outerLoop)*${innerLoop) -S(outerLoop * innerLoop}°);
innerLoop = innerLoop - 1;
outerLoop = outerLoop - 1;
//individual//test separate
function doInnerLoop (outerLoop, num2) {
let innerLoop = num2;
while (innerLoop>0) {
console.log(" outerLoop-$(outerLoop} innerLoop-$(innerLoop} );
console.1og("$(outerLoop) *${innerLoop)-$(outerLoop * innerLoop});
innerLoop = innerLoop - 1;
}