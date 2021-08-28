const Manager = require("../lib/manager.js")

describe('Manager', ()=>{

  it ('should return a property containing name, email, id, role, office number', ()=>{
    const testManager = new Manager("dsaf", "sdfa", 2, "sadf", 3);

    expect(testManager.office).toBe(3)
  })

})