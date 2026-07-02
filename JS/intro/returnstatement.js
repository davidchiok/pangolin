/*
1.exist code
2.return any required data
*/

function sayName() {
    let first_namem = "samson" // statement 1
    console.log(`first name ${first_name}`) // statemnet2
    let second_name = "Johnna";//statement 3
    console.log(`second_name ${second_name}`) //statement 4
    let full_name = "johnna" // statemnet 5
    console.log(`Names are ${full_name}`);//statement 6
    // let  sayMyNameValue = sayMyNameValue();

    // console.log(`function returned ${sayMyName}`)
}
let sayMyNameValue = sayName();
// console.log(Function returned ${sayName});
console.log(
    `Function returned ${sayMyNameValue} its type ${typeof sayMyNameValue}`
);


let sayMyNameValue = sayMyName();
// console.log(Function returned ${sayMyName});
console.log(
    ` Function returned ${sayMyNameValue} its type ${typeof sayMyNameValue}`,
);

/*
senario 1:
leave it as its and look at the results.
-what happens
senerio 2: after the sceond statement inside the function put a return.
-what happens(exist a function exactly where the return statement is)
senerio 3:after the fourth statement inside a fuction put a return
-what happen (exists the function exactly where the return statement is)
senerio 4:put a return statement anywhere inside your function and return a number of choice
senerio 5:put a return statement anywhere inside your function and return number of choice
senerio 6:put a return statement anywhere inside your function and return a boolean of your choice 
*/