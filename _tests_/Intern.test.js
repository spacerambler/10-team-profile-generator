const Intern = require('../lib/intern.js')

describe("Intern", ()=>{
    it ('should return name, email, id, role, school', ()=>{
        const testIntern = new Intern('ryan', 'ryan@dmpc.com', 5, 'intern', 'phoenix technical college')
        expect(testIntern.school).toBe('phoenix technical college')
    })
})