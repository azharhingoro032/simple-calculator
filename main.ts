#! /usr/bin/env node
 
import inquirer from 'inquirer'; 
const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the opreator to perform action",
    type: "list",
    name: "opreator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

if (answer.opreator === "addition") {
  console.log( answer.firstnumber + answer.secondnumber);
}else if(answer.opreator === "subtraction") {
  console.log( answer.firstnumber - answer.secondnumber);
}else if(answer.opreator === "multiplication") {
  console.log( answer.firstnumber * answer.secondnumber);
}else if(answer.opreator === "division") {
  console.log( answer.firstnumber / answer.secondnumber);
}else {
  console.log("please select valid operator") 
}