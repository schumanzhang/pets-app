const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
 
server.use(middlewares)
server.use(router)
server.listen(3002, () => {
  console.log('JSON Server is running');
});

// npm install --save-dev json-server
// node server.js