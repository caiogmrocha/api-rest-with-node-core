const http = require('http');
const PORT = 3000;
const { httpHandler } = require('./router');

http
  .createServer(httpHandler)
  .listen(PORT, () => console.log('Server is running at http://localhost:3000'));