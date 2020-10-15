require('dotenv').config();

module.exports = {

  // DB connection
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,

  // Seeds config
  seedersStorage: "json",
  seedersStoragePath: "seedsLog",

  // Migrations config
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",

  define: {
    timestamps: false,
    underscored: true
  }
}