/*
let start with if .
  * its special.
  *you use it on its own.
  */

  /*
  ->if is independent.
  one statement deos not depend on aonther.
  */

  let age=prompt("enter your age:")
  alert(`you entered{age}`)

  //age=27
  //27>10:true
  if (age>10){
    alert(`you are a baby.`)
  }
  //27>13=true
  if(age>13){
    alert(`you are a teen.`)
  }

//27>18=true
if (age>27){
    alert(`you can legallu drink and smoke`)
}
//27>27=false
if (age>27){
    alert(`best age for marriage`)
}

//27>45=false
if(age>45){
    alert(`best age for retirement`)
}
//27>50=false
if(age>50){
    alert(`you are an ancestor`)
}