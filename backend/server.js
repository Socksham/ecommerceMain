const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
 require("dotenv").config({ path: "./config.env" });

const app = express();

app.use(cors())
app.use(express.json());
app.use(function (rew, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next()
})
// get driver connection
const dbo = require("./db/conn");
 
app.get('/', (req, res) => {
   return res.send("This is a new thing")
})

app.listen(process.env.PORT || 5000), () => console.log(`listening on port ${PORT}!`);
