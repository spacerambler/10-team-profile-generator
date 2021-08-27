// purpose: create team classes
// do we need extender anywhere?
// Team Member class to include email, github username, name, and ID
// positions added as separate files?
// do we randomly generate ID or provide an ID in parameters?


class Employee {
  constructor(name, email, id){
    this.name = name;
    this.email = email;
    this.id = id;
  }

  getName(){
    console.log(`Name: ${this.name}`)
  }
  getId(){
    console.log(`ID: ${this.id}`)
  }
  getEmail(){
    console.log(`Email: ${this.email}`)
  }

}

const newEmployee = new Employee('Jim', 'jim@dmpc.com', 3)
newEmployee.getEmail()

module.exports = Employee;