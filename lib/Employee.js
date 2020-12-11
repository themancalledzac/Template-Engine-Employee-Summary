// TODO: Write code to define and export the Employee class
class Employee {

    constructor( name, id, email ) {
        // name
        this.name = name;
        // id
        this.id = id;
        // email
        this.email = email;
        // this.role = role;

    }
    getName() {
        return this.name;
    }
    
    // getId()
    getId() {
        return this.id;
    }
    
    // getEmail()
    getEmail() {
        return this.email;
    }
    
    // getRole() // Returns 'Employee'

    getRole() {

        return "Employee";
            
        };

        // return this.role;
        // ??
    
}


// getName()

module.exports = Employee

