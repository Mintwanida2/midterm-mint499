function render(movies){
    return ` 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Data</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <table>
        <th>ID</th>
        <th>Title</th>
        ${movies
            .map((movie)=>`<tr>
            <td>${movie.id}</td>
            <td>${movie.title}</td>
        </tr>`)
        .join('')}
        
       
    </table>
</body>
</html>
`};

module.exports = render;



