const fs = require('fs');
const inquirer = require("inquirer");
const generatePage = require('./src/page-template');


inquirer.prompt([
  {type:'input',
  name:"name",
  message: "What is your name?"}
]).then(answers=>console.log(answers));




  // fs.writeFile('index.html', generatePage(nameG, github), err => {
  //     if (err) throw err;
  //     console.log('Portfolio complete! Check out index.html to see the output!');
      
  // });
