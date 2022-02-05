const express = require('express');
const app = express();

const users = [
  { id: 0, name: 'stanley', coolness: 0 },
  { id: 1, name: 'eric', coolness: 100 },
  { id: 2, name: 'jonathan', coolness: 100 },
  { id: 3, name: 'kenneth', coolness: 2 },
];

app.get('/', (req, res, next) => {
  res.send(`
    <html>
      <body>
        <ul>
          ${users.map(({ id, name }) => `<a href='/${id}'>${name}</a>`).join('')}
        </ul>
      </body>
    </html>
  `);
});

app.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const user = users.find(user => user.id === +id);
  res.send(`
    <html>
      <body>
        ${user.name}
        ${user.coolness}
      </body>
    </html>
  `);
});

app.listen(3000)

/**
 * rm -rf node_modules
 * git add .
 * git commit -m "deleted node modules"
 * git push
 * 
 *
 * make a .gitignore
 * add node_modules in there 
 */
