const { Pool } = require("pg");

const pool = new Pool();

module.exports = {
  async query(text, params) {
    const start = Date.now();
    const response = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log("Query executed in", duration, "ms.");

    return response;
  },
  pool,
};
