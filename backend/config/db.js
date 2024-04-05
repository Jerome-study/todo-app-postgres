require("dotenv").config();
const { Pool } = require("pg");
const queries = require("../queries/queries");


const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const pool = new Pool({
    connectionString: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
});

pool.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
});

const setupQuery = async () => {
  try {
    await pool.query(`${queries.createUserTable}`);
    await pool.query(`${queries.createTodsTable}`);
  } catch(error) {
    console.log(error.message);
  }
}

setupQuery();

module.exports = pool