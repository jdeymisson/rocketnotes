const sqliteConnection = require("../../sqlite");
const createUsers = require("./CreateUsers");

async function migrationsRun() {
  const schemas = [
    createUsers
  ].join('');

  sqliteConnection()
  .then(db => db.exec(schemas));
};

module.exports = migrationsRun;