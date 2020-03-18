// const questions = [
  
// ];

// function writeToFile(fileName, data) {
 
// }

// function init() {

// }

// init();


// const fs = require("fs");
// const axios = require("axios");
// const inquirer = require("inquirer");

// inquirer.prompt([
//     {
//       type: "list",
//       name: "color",
//       message: "What is your favorite color?",
//       choices: [
//           "Red",
//           "Blue",
//           "Purple",
//           "Orange",
//           "Green"
//       ]
//     },
//     {
//       type: "input",
//       name: "name",
//       message: "What is your GitHub username?"
//     }

// ]).then(function(data) {
//   let filename = data.name.toLowerCase().split(" ").join(" ") + ".json";
//   fs.writeFile(filename, JSON.stringify(data, null, "\t"), function(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Success");
//   });
// }).then((response) => {
//   console.log(response.name)
//   axios.get(`https://api.github.com/users/${response.name}`)
//     .then(data => {
//       console.log(data);
//       // data.data.login
//       // data.data.avatar_url
//       // data.data.email
//       // Add badges
//       // Write to file
//       fs.writeFile("README.md", function(err) {
//       })
//     })
// });


const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// username
// project title
// description of project
// license ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
// command to install dep
// command run tests
// Instructions
// How to contribute
inquirer
  .prompt([
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    }
  ]).then((response) => {
    console.log(response.github)
    axios.get(`https://api.github.com/users/${response.github}`)
      .then(data => {
        console.log(data);
        // data.data.login
        // data.data.avatar_url
        // data.data.email
        // Add badges
        // Write to file
        fs.writeFile("README.md", function(err) {
        })
      })
  })