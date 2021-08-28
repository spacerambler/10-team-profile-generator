const Engineer = require('../lib/engineer.js')

describe('Engineer', ()=>{
    it ('Should return name, email, id, role, github', ()=>{
       const testEngineer = new Engineer('Dwight', 'dwight@dmpc.com', 4, 'engineer', 'dwight')
        expect(testEngineer.email).toBe('dwight@dmpc.com')
    })
})