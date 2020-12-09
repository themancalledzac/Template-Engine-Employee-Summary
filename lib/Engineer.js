// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer( name, id, email, gitHub ) {

    // name
    this.name = name;
    // id
    this.id = id;
    // email
    this.email = email;
    // gitHub // GitHub username
    this.gitHub = gitHub;
}

Engineer.prototype.getName = function() {
    return this.name;
}
// getName()
// getId()
// getEmail()
// getGithub()
// getRole() // Returns 'Engineer'

module.exports = Engineer