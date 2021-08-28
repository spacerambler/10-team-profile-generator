const Employee = require("../lib/Roster.js")

describe('Employee', ()=>{

  it ('should return a property containing name, email, id, role', ()=>{
    const testEmployee = new Employee("dsaf", "sdfa", "asdf", "sadf");

    expect(testEmployee.name).toBe("dsaf")
  })

})

//test methods
// const = true (string)
// cost = false (string)