

/*
step 1. ensure your js file can access the data.

*/

const data = require("./data.json");
console.log(data);



/*
step 2:use a for<while> a loop to go through each data point
-print the data


step 3: for each data point create a message for example
  'dear <<sir/ madam>base on gender> we regret to inform you 
  that you wouldn,t be going to the next of the interview process.the reason is that u r not fit
for the job. we wish you all the best in your future endeavors. sincerely, the hiring team'

console.log(the message for each data point)

step 4 :create an empty array and the user data including the messages.
output object should be like this
{
id: 1,
firstName: 'John',
lastName: 'Doe',
age: 30,
gender: 'male
phone: '123-456-7890',
email: 'john.doe@example.com'
"message":<>
}
step 5:write this data to a new file called output.json.
Hint do JSON.stringy -> js object to json notation.
save this data to your file i.e. output.json
*/




for (let i = 0; i < data.length; i++) {
  const person = data[i];
  let salutation = person.gender ===dear 'male' ? 'sir' : 'madam';
  let message = `dear ${salutation}, we regret to inform you that you wouldn't be going to the next stage of the interview process. 
  The reason is that you are not a good fit for the job.
   We wish you all the best in your future endeavors. Sincerely, 
   the hiring team.`;
  console.log(message);
}while (i < data.length) {

    console.log(data[i]);

}





for (let i = 0; i < data.length; i++) {
  const person = data[i];
  let salutation = person.gender === 'male' ? 'sir' : 'madam';
  let message = `dear ${salutation}, we regret to inform you that you wouldn't be going to the next stage of the interview process. The reason is that you are not a good fit for the job. We wish you all the best in your future endeavors. Sincerely, the hiring team.`;
  console.log(message);
} 
console.log('done');

{
name: 'John Doe',
age: 30,
gender: 'male',
position: 'Software Engineer',
email: 'john.doe@example.com',
status: 'rejected'
}
{
    name: 'Jane Smith',
    age: 28,
    gender: 'female',
    position: 'Product Manager',
    email: 'jane.smith@example.com',
    status: 'rejected'
}
{
name: 'Alice Johnson',
age: 35,
gender: 'female',
position: 'Data Scientist',
email: 'alice.johnson@example.com',
status: 'rejected'
}

}