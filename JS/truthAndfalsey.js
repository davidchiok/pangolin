/*
if you know something is not falsey then its truthy.
falsey
1.false
2.0
3.-0
4.null
undefined
``-empty string
Nan->Not a number
anything that is not falsey its truthy
truyhy|| falsey ->truthy
*/

let username1="john mwangi" //truthy
let username2=0//falsey

let activeUsername=usrename2 ||username1
//activeusername=>
    //
console.log(activeUsername)

let bothUsernameOk=username1&&username2
console.log(bothUsernameOk)//truthy or false