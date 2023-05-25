const mongoose = require('mongoose')

const uri = process.env.ATLAS_URI || ""

// create a connection to a database
const dbIMS = mongoose.createConnection(uri);

// use another database without creating additional connections
const dbTest = dbIMS.useDb('someDbName');

// proceed as you would normally
dbIMS.on("error", console.error.bind(console, "connection error: "));
dbIMS.once("open", function () {
  console.log("Connected successfully");
});

module.exports = {dbIMS,dbTest};