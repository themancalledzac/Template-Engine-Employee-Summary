const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeList = [];

// Ask for manager info
function askUserForManagerInfo() {

    return inquirer.prompt([
        {
            name: "name",
            message: "Please input full name.",
            type: "input"
        },
        {
            name: "id",
            message: "What is your employee ID?",
            type: "input"
        },
        {
            name: "email",
            message: "Please input your work email address.",
            type: "input"
        },
        {
            name: "officeNumber",
            message: "Please input your Office Number",
            type: "input"
        }
    ]).then(( managerData ) => {

        const newManager = new Manager( 
            managerData.name, 
            managerData.id, 
            managerData.email, 
            managerData.officeNumber 
            );

        employeeList.push( newManager );
        // console.log(employeeList);
        askUserForEmployeeType();

    });

}

// Ask user for next employee type
function askUserForEmployeeType() {

    return inquirer.prompt([
        {
            name: "continue",
            message: "Please choose an employment type.",
            type: "list",
            choices: ['Engineer', 'Intern', 'No more employees needed.'],
            default: 'No more employees needed.'
        }
    ]).then(( newEmployeeChoiceData ) => {

        // if selects new engineer, function askUserForEngineerInfo
        if ( newEmployeeChoiceData.continue === 'Engineer' ) {
            console.log(newEmployeeChoiceData);
            askUserForEngineerInfo() 
        }
        else if ( newEmployeeChoiceData.continue === 'Intern' ) {
            // else if the user selects new intern, function askUserforInternInfo
            console.log(newEmployeeChoiceData);
            askUserForInternInfo()
        } 
        else if (newEmployeeChoiceData.continue === 'No more employees needed.' ) {
            // else push htmlRenderer.js file
            console.log(newEmployeeChoiceData);
            createHtmlFile()
        };
        // console.log(newEmployeeChoiceData);
    });

};

// Ask user for engineer info
function askUserForEngineerInfo() {

    return inquirer.prompt([
        {
            name: "name",
            message: "Please input full name.",
            type: "input"
        },
        {
            name: "id",
            message: "What is your employee ID?",
            type: "input"
        },
        {
            name: "email",
            message: "Please input your work email address.",
            type: "input"
        },
        {
            name: "github",
            message: "Please input your github username",
            type: "input"
        }

    ]).then(( engineerData ) => {

        const newEngineer = new Engineer( 
            engineerData.name, 
            engineerData.id, 
            engineerData.email, 
            engineerData.github );

        employeeList.push( newEngineer );
        askUserForEmployeeType();

    });

}

// Ask user for intern info
function askUserForInternInfo() {

    return inquirer.prompt([
        {
            name: "name",
            message: "Please input full name.",
            type: "input"
        },
        {
            name: "id",
            message: "What is your employee ID?",
            type: "input"
        },
        {
            name: "email",
            message: "Please input your work email address.",
            type: "input"
        },
        {
            name: "school",
            message: "Please input the name of the school you are currently enrolled in.",
            type: "input"
        }
    ]).then(( internData ) => {

        const newIntern = new Intern( 
            internData.name, 
            internData.id, 
            internData.email, 
            internData.school );

        employeeList.push( newIntern );
        askUserForEmployeeType();

    });

}


function createHtmlFile() {
    const htmlContent = render( employeeList );

    // Use the FS module to create the output file.
    fs.writeFile(outputPath, htmlContent, (err) => {
        if (err) throw err;

        console.log(employeeList);
    })
};

askUserForManagerInfo();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
