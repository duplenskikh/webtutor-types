// const db = new ActiveXObject("ADODB.Connection");

// db.records;

const db = ActiveXObject("ADODB.Connection");
db.Execute("sql: SELECT @@version");
