// ---------------Required Modules--------------------------
const inquirer = require('inquirer');
const fs = require('fs');

// --------------License Logo link Variables-----------------
const mit = '![AUR license](https://img.shields.io/static/v1?label=License&message=MIT&color=blue)';
const apache = '![AUR license](https://img.shields.io/static/v1?label=License&message=Apache&color=blue)';
const gnu2 = '![AUR license](https://img.shields.io/static/v1?label=License&message=GNU-2.0&color=blue)';
const gnu3 = '![AUR license](https://img.shields.io/static/v1?label=License&message=GNU-3.0&color=blue)';
const none = '![AUR license](https://img.shields.io/static/v1?label=License&message=none&color=red)';

// ---------------------Questions Array----------------------
const questions = [
  {
      type: 'input',
      name: 'Author',
      message: 'What is the Authors name?',
      default: 'Brett Treweek',
  },
  {
      type: 'input',
      name: 'Username',
      message: 'What is your Github username?',
      default: 'brett-treweek',
  },
  {
      type: 'input',
      name: 'Title',
      message: 'What is the title of this project?',
      default: 'CLI Readme Generator',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter a valid title'
          }
          return true
      }
  },
  {
      type: 'editor',
      name: 'Description',
      message: 'Provide a short description of this project.',
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
      message: 'What are the steps required to install this project?',
      default: 'install node.js\ninstall npm\ninstall inquirer\n',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter valid Instructions'
          }
          return true
      }
  },
  {
      type: 'editor',
      name: 'Usage',
      message: 'Provide Instructions and examples for use.',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter valid Instructions'
          }
          return true
      }
  },
  {
      type: 'input',
      name: 'Screenshot',
      message: 'Provide file name of screenshot',
      default: 'screenshot.PNG',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter valid screenshot'
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
      default: 'Contributing to this project is welcome.',
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
      default: 'There are no tests at present.'
      
  },
  {
      type: 'input',
      name: 'Support',
      message: 'Please add Support email address',
      default: 'bretttrew@gmail.com',
      validate: (answer) => {
          if(answer=== ''){
              return 'Please enter valid email address'
          }
          return true
      }
  }
  
]

console.log('------------------Readme Generator--------------------')

inquirer
  .prompt(questions)
  .then(answers => {
   
// -----------------License Logo If Statement-------------------------
    if(answers.License === 'MIT'){
        licenseLogo = mit
    }else if (answers.License === 'GNU 2.0'){
        licenseLogo = gnu2
    }else if(answers.License === 'GNU 3.0'){
        licenseLogo = gnu3
    }else if(answers.License === 'Apache 2.0'){
        licenseLogo = apache
    }else{
        licenseLogo = none
    }

// --------------------Markdown Template-----------------------------
const readmeFramework =
`# ${answers.Title}\n
${licenseLogo}\n
## Description\n
${answers.Description}\n
---
## Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)\n
---
## Installation\n
Please follow these steps to install the project and any dependancies.\n
\`\`\`bash
${answers.Installation}\n
\`\`\`\n
---
## Usage\n
${answers.Usage}\n
![alt text](Assets/Images/${answers.Screenshot})\n
---
## License\n
This project is licensed under ${licenseLogo}\n
---
## Contributing\n
${answers.Contributing}\n
You can contribute to this project at [GitHub](https://github.com/${answers.Username}/CLI-README-Generator)\n
---
## Tests\n
Please use these commands to perform tests.\n
\`\`\`bash\n
${answers.Tests}\n
\`\`\`\n
---
## Questions\n
For any questions and support please contact ${answers.Author} at ${answers.Support} or message me through [GitHub](https://github.com/${answers.Username}).`
    

// -----------------Function to create Readme and catch errors--------------------
    fs.writeFile('proREADME.md', readmeFramework, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
    console.log(answers)
    console.log(answers.Title)
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log('Prompt couldnt be rendered in the current environment')
    } else {
      console.log('Something else went wrong')
    }
  });