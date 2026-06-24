let is_greater_than_18 =mercy_age >18//true or false
console.log(`is mercy age graeter than 18${is_greater_than_18}`)
let has_more_than_20k=mercy_balance>20000
console.log(`mercy has more than 20k ${has_more_than_20k}`)
console.log(`mercy is age is greater than 18 
    and has more than 20k in her account ${is_greater_than_18&&has_more_than_20k} `)

    //mercy_age>18&&mercy_balance>20000
    let simplified=mercy_age>18&&mercy_balance>20000
    console.log(`simplified ${simplified}`)
    console.log(`further simplification is ${mercy_age>18&& mercy_balance>200000}`)

    console.log(`mercy is age is greater than 18
        or she has 20k in her account
    ${is_greater_18_||has_more_than_20k}`)

    /*
    or at least one statement has to be true for the whole statement to be true 
    */

    console.log(`this is not true=${!true}`)
    console.log(`this is not false=${!false}`)