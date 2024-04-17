#! /usr/bin/env node
//called shebang ,to publish it on npm 

import inquirer from "inquirer";


// to enquire from user
let answer = await inquirer.prompt({
    /*let answer:{
        sentence:string
    }=await inquirer.prompt({*/
    name: "sentence",
    type: "input",
    message: "Enter your sentence for word count:"


})
// this will remove the white spaces
let word = answer.sentence.trim().split(" ")
// this will array the log in the console
console.log(word)
// this will count the words in console
console.log("\n The total word in this sentence is : \n")
console.log(`${word.length}`);
    

