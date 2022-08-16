const pool = require("./../db")
const tableNames = require('./constants/tableNames');

// Check if table in endpoint exists in our "whitelist"
module.exports = (tableName) => {
  if (tableNames.includes(tableName)) {
    return 'SELECT * FROM '+tableName; 
  }
  return 'SELECT NULL';
};