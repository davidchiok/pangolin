

/*console.log--> debugging by printing out information in the screen 

console.log->ensure you write your console ins= such a way that it,s help you figure out issue .

->simple excercise from a gross salary 
->let calculate the net salary 

*/

const sallaryGross=50000;//instruction
//console.log("gross is ) 


git



/*
the type of data is just to tell the variables types 
-Number
-String
-Boolean
-null
->undefined
*/



let numb1=749
console.log("numb ",numb1,"its type is",typeof numb1)
let strnumb="854"
console.log("strsNumb",strNumb ,"its type is",typeof strNumb)
let myName="john"
console.log('my nam is',myName,"its type is" ,typeof myName)
let ismarried=true
console.log("ismarried","ismarried,","ITS type is", "typeof ismarried")
let nullval=null//type of <null>object->
console.log("nullval",nullval,"ITS type is",typeof nullval)
let unValue;
console.log("unValue",unValue,"ITs type is" ,"typeof unvalue")







const bunus="200"
const sallary=50000

const sallaryGross=bunus+sallary; //instruction

//console.log(salaryGross) !-> more information
console.log("Gross salary is",sallaryGross,"its type",typeof sallaryGross) //->more helpfull
//tax calculations

const paye = sallaryGross*0.16
console.log("for gross salary of" ,sallaryGross,"paye is",paye)
//->
const nhif=2500
console.log("nhif deduction",nhif)
const sha=2500
console.log("SHA IS" ,sha)
const totalDeduction=paye+nhif+sha
console.log("Total Deduction are ",totalDeductions)
const netsallary=sallaryGross-totalDeductions
console.log("Your net sallary is" ,netsallary)