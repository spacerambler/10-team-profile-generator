const Employee = require('./Roster.js')

class Manager extends Employee {
  constructor(name, email, id, role, office){
    super(name, email, id, role)
    this.office = office
  }

  getOffice(){
    console.log(`Office Number: ${this.office}`)
  }
}

// const Michael = new Manager('Michael', 'michael@dmpc.com', 1, 'Manager', 1)
// console.log(Michael)

module.exports = Manager;