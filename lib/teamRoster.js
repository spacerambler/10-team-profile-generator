// purpose: create team classes
// do we need extender anywhere?
// Team Member class to include email, github username, name, and ID
// positions added as separate files?
// do we randomly generate ID or provide an ID in parameters?


class TeamMember {
  constructor(name, email, id){
    this.name = name;
    this.email = email;
    this.id = id;
  }

  printInfo(){
    console.log(`Name: ${this.name}`)
    console.log(`ID: ${this.id}`)
    console.log(`Email: ${this.email}`)
  }
}

const newTeamMember = new TeamMember('Jim', 'jim@dmpc.com', 3)
newTeamMember.printInfo()

module.exports = TeamMember;