// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    // passing in arguements
    constructor( name, id, email, github ) {        
        super( name, id, email )
        this.github = github;
    }

    getRole() {
        return "Engineer";
    };

    getGithub() {
        return this.github;
    }
}
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

module.exports = Engineer