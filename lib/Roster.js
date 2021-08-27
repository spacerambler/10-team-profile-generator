// purpose: create team classes
// do we need extender anywhere?
// Team Member class to include email, github username, name, and ID
// positions added as separate files?
// do we randomly generate ID or provide an ID in parameters?


class Employee {
  constructor(name, email, id, role){
    this.name = name;
    this.email = email;
    this.id = id;
    this.role = role;
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
  getRole(){
    console.log(`${this.role}`)
  }
}

const newEmployee = new Employee('Jim', 'jim@dmpc.com', 3, 'Sales')
newEmployee.getRole()
console.log(newEmployee)

module.exports = Employee;