/*

this file contains instructions knex needs to connect
to the database

Each key on the exported object has the configuration
for a database environment (dev, production, testing, etc)

The knex CLI will use the configuration on this file to find the DB.

The knex CLI will use the "development" environment by default, but
we can override that behavior.

*/

module.exports = {
  // teaches knex to connect to the development database
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/car-dealer.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
