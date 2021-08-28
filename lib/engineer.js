const Employee = require('./Roster.js')

class Engineer extends Employee {
  constructor(name, email, id, role, github){
    super(name, email, id, role)
    this.github = github
  }

  getGithub(){
    console.log(`Github URL: https://github.com/${this.github}`)
  }
}

// const Pam = new Engineer('Pam', 'pam@dmpc.com', 2, 'Engineer', 'test')
// console.log(Pam)

module.exports = Engineer;