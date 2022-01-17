const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [nameG, github] = profileDataArgs;
const generatePage = require('./src/page-template');





  fs.writeFile('index.html', generatePage(nameG, github), err => {
      if (err) throw err;
      console.log('Portfolio complete! Check out index.html to see the output!');
      
  });