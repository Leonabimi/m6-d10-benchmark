require("dotenv").config();

const fs = require("fs");

const path = require("path");

const db = require("../src/utils/db");

const { promisify } = require("util");

const read = promisify(fs.readFile);

const createTable = async () => {
  try {
    const dataPath = path.join(__dirname, "../data/all.sql");
    const data = await read(dataPath);
    const sqlQueryString = data.toString();
    await db.query(sqlQueryString);
    console.log("Tables createt successfully");
  } catch (error) {
    console.log(error);
  }
  db.pool.end();
};

createTable();
