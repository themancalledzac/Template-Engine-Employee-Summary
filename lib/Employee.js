// TODO: Write code to define and export the Employee class
function Employee( name, id, email ) {

    // name
    this.name = name;
    // id
    this.id = id;
    // email
    this.email = email;
}


// getName()
Employee.prototype.getName = function() {
    return this.name;
}

// getId()
Employee.prototype.getID = function() {
    return this.id;
}

// getEmail()
Employee.prototype.getEmail = function() {
    return this.email;
}

// getRole() // Returns 'Employee'
Employee.prototype.getRole = function() {
    // ??
}

module.exports = Employee

