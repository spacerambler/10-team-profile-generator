// purpose: generate HTML front end
const generateHTML = (answers) =>
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
  <h1>Team Roster</h1>
  <div class="employee">
    <h2>${answers.name}, ${answers.role}</h2>
    <p>ID: ${answers.id}</p>
    <p>Email: ${answers.email}</p>
    <p>Office Number: ${answers.office}</p>
  </div>
  <div class="employee">
    <h2>Pam, Engineer</h2>
    <p>ID: 2</p>
    <p>Email: pam@dmpc.com</p>
    <p>GitHub: example</p>
  </div>
  <div class="employee">
    <h2>Jim, Engineer</h2>
    <p>ID: 2</p>
    <p>Email: jim@dmpc.com</p>
    <p>GitHub: example</p>
  </div>
  <div class="employee">
    <h2>Dwight, Engineer</h2>
    <p>ID: 2</p>
    <p>Email: dwight@dmpc.com</p>
    <p>GitHub: example</p>
  </div>
  </div>
  <div class="employee">
    <h2>Ryan, Intern</h2>
    <p>ID: 1</p>
    <p>Email: michael@dmpc.com</p>
    <p>Office Number: 1</p>
  </div>

</body>
</html>
`