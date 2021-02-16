const express = require("express");

const app = express();

const cors = require('cors')
 
app.use(cors())
app.use(express.static("../angular-app/dist/angular-app"));

app.listen(5000, () => {
  console.log("App is running");
});
