// purpose: generate HTML front end
function generateHTML(answers) {
  return
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
      <h2>${answers.name}</h2>
      <p>ID: ${answers.id}</p>
      <p>Email: ${answers.email}</p>
      <p>Office Number: ${answers.office}</p>
    </div>
  </body>
  </html>
  `
}

module.exports = generateHTML;