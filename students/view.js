function render(students) {
    return ` 
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Student List</title>
          <link rel="stylesheet" href="style.css">
      </head>
      <body>
          <h1>Student List</h1>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Major</th>
                  </tr>
              </thead>
              <tbody>
                  ${students.map(student => `
                      <tr>
                          <td>${student.id}</td>
                          <td>${student.name}</td>
                          <td>${student.major}</td>
                      </tr>
                  `).join('')}
              </tbody>
          </table>
      </body>
      </html>
    `;
  }
  
  module.exports = render;
  