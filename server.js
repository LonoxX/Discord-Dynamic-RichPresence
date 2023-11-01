const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Yes Sir! I am alive!`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!") });
}
 
module.exports = keepAlive;
