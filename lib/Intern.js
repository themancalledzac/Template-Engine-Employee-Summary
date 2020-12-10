// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    // passing in arguements
    constructor( name, id, email, school ) {        
        super( name, id, email )
        this.school = school;
    }

    getRole() {
        return "Intern";
    };

    getSchool() {
        return this.school;
    }
}


module.exports = Intern