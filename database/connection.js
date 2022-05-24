const path = require('path');
const { readFile } = require('fs/promises');

async function databaseConnection() {
  const file = path.join(__dirname, 'database.json');

  return JSON.parse(await readFile(file));
}

module.exports = databaseConnection;