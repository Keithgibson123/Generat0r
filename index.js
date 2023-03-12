// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path")
const inquirer  = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        //The title of the project
        type: "input",
        name: "title",
        message: "please name your project",
    },
    {
        //small discription
        type: "input",
        name: "discription",
        message: "What is the purpose behind this project?",
    },
    {
        // The name on the project
        type: "input",
        name: "name",
        message: "What is your full name?",
    },
    {
        //how to contact you
        type: "input",
        name: "email",
        message: "please add contact information",
    },
    {
        //able to show the two options in a list
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'CC--0'],
        when: ({ confirmLicenses }) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)

    //creating the readme to the file
    .then((response) =>
        writeToFile('./dist/Readme.md', generateMarkdown(response))
    );
}

// Function call to initialize app
init();
