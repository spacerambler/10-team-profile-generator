const Employee = require('./Roster.js')

class Intern extends Employee {
    constructor(name, email, id, role, school){
        super(name, email, id, role)
        this.school = school
    }
    
    getSchool() {
        return console.log(`University: ${this.school}`)
    }
}

module.exports = Intern

