const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

module.exports = () => {
  return open({
    filename: "./src/db/rocket.sqlite",
    driver: sqlite3.Database,
  });
};
