import * as elements from 'typed-html';

const Root = ({ children }: elements.Children) => /*html*/ ` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cafe</title>
    <script src="https://unpkg.com/htmx.org@2.0.2"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  ${children}
</body>

`;

export default Root;