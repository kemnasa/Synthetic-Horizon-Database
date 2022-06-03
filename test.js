var Database = require("./index");
Database.set("hhi",'hi');
var x = Database.get('hhi');
console.log(x)