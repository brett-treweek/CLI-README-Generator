var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */

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
                return 'please enter a valid title'
            }
            return true
        }
    },
    
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });