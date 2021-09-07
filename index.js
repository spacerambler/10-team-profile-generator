// purpose of this file is to run in terminal
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const generateHTML = require("./dist/generateHtml.js")

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the team manager?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is their employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email address?',
    },
    {
      type: 'input',
      name: 'office',
      message: 'Which office are they in?',
    }
  ])
  .then(answers => {
    console.info('Answers:', answers)
  })
}

function init() {
  promptUser().then((answers) =>
  fs.writeFile("index.html", generateHTML(answers), function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully wrote to index.html")
    }
  })
  )
}

init();

// want to try to use a for loop here inside the inquirer function

// inquirer
// .prompt([{
//   type: 'input',
//   name: 'manager-name',
//   message: 'Who is the team manager?',
// },
// {
//   type: 'input',
//   name: 'employee-id',
//   message: 'What is their employee ID?',
// },
// {
//   type: 'input',
//   name: 'email',
//   message: 'What is their email address?',
// },
// {
//   type: 'input',
//   name: 'office',
//   message: 'Which office are they in?',
// }])
// .next({
//   type: 'list',
//   name: 'roleSelection',
//   message: 'Select role to add next:',
//   choices: ['Engineer', 'Intern']
// })
// nextPrompt(function(){
//   if (input ==){} else {}
// })

// self contained inquirer module

// function hasEngineer(answer) {
//   return new Promise((res, rej) => {
//     if (answer.includes('Engineer')) {
//       const inquirerEngineer = inquirer.createPromptModule();
//       inquirerEngineer(inquirerEngineerList).then(answers => {
//         StorageEvent.options.engineer = answers.Engineer;
//       })
//     }
//   })
// }

// in an example I was looking at to see how createPromptModule works... I noticed they put their inquirer lists in what looks like a package.json
// https://www.tabnine.com/code/javascript/functions/inquirer/Inquirer/createPromptModule
// https://github.com/codexu/x-build/blob/ba373d8c29d2be3960b4712d21c1b31e264857c4/lib/store.js 

// so could I make 3 inquirerList variables for each role and then somehow loop through those?
// or would it be 3 functions? or both? 
// I want the manager prompt to go through once, next select either engineer/intern/done
  // if engineer is selected go through prompts and return back to role selector...
  // if intern is selected go through intern prompts and return back to role selector...
  // if done, then all the answers are saved and sent to html

  // index is getting too big... need to separate out into their own files?