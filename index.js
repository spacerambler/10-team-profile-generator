// purpose of this file is to run in terminal
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'manager-name',
      message: 'Who is the team manager?',
    }
    {
      type: 'input',
      name: 'employee-id',
      message: 'What is their employee ID?',
    }
    {
      type: 'input',
      name: 'email',
      message: 'What is their email address?',
    }
    {
      type: 'input',
      name: 'office',
      message: 'Which office are they in?',
    }
    {
      type: '',
      name: '',
      message: '',
    }
  ])
}

// want to try to use a for loop here inside the inquirer function

inquirer
.prompt([{
  type: 'input',
  name: 'manager-name',
  message: 'Who is the team manager?',
}
{
  type: 'input',
  name: 'employee-id',
  message: 'What is their employee ID?',
}
{
  type: 'input',
  name: 'email',
  message: 'What is their email address?',
}
{
  type: 'input',
  name: 'office',
  message: 'Which office are they in?',
}])
.next({
  type: 'list',
  name: 'roleSelection',
  message: 'Select role to add next:',
  choices: ['']
})
nextPrompt(function(){
  if (input ==){} else {}
})

// self contained inquirer module

