require('dotenv').config();

module.exports = {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
};
