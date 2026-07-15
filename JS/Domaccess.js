
/*
MINI EXCERCISE
1.create a html form:atleast 2 input and a summit button
2.attach the summit event listener.
3.prevent a form default behavior
4.print out the values of your form inputs.
*/

document.getElementById("form1").addEventListener("submit",submitform);

document.getElementById("form1input").addEventListener("input",(e)=>{
    //value
    console.log(e.target.value);
}
);

function submitform(e) {
    e.preventdefault();
    // // stop the form from making an auto submission
    //submit
    //
const inputlist = document.querySelector("#form1").querySelectorAll("input");

const input = inputlist(0);
const input = inputlist(1);
console.log("input 1",input.value);
console.log("input 2",input2.value);
console.log("f1 input1",document.getElementById("formput1").value);
console.log("f1 input2",document.getElementById("form1input2").value);
input.value = "cats and dogs";
}

