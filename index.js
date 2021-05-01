var inquirer = require('inquirer');

const questions = [
  {
      type: 'input',
      name: 'Author',
      message: 'What is the Authors name?',
      default: 'Brett Treweek',
  },
  {
      type: 'input',
      name: 'Title',
      message: 'What is the Title?',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter a valid title'
          }
          return true
      }
  },
  {
      type: 'input',
      name: 'Description',
      message: 'Please add a Description of your project.',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter a valid Description'
          }
          return true
      }
  },
  {
      type: 'input',
      name: 'Installation',
      message: 'Please add Installation Instructions.',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter valid Instructions'
          }
          return true
      }
  },
  {
      type: 'input',
      name: 'Usage',
      message: 'Please add Usage Instructions.',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter valid Instructions'
          }
          return true
      }
  },
  {
      type: 'list',
      name: 'License',
      message: 'Please choose a License.',
      choices: ['MIT','GNU 2.0', 'Apache 2.0','GNU 3.0','None'],
      default: 'MIT',
      
  },
  {
      type: 'input',
      name: 'Contributing',
      message: 'Please add Contributing Instructions.',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter valid Instructions'
          }
          return true
      }
  },
  {
      type: 'input',
      name: 'Tests',
      message: 'Please add Tests Instructions.',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter valid Instructions'
          }
          return true
      }
  },
  {
      type: 'input',
      name: 'Support',
      message: 'Please add Support Instructions.',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter valid Instructions'
          }
          return true
      }
  },
  
]

console.log('------------------Readme Generator--------------------')

inquirer
  .prompt(questions)
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  // .catch(error => {
  //   if(error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });