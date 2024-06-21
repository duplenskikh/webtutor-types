const db = ActiveXObject("ADODB.Connection");
db.Execute("sql: SELECT @@version");
