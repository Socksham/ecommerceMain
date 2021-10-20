const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
 
const app = express();
app.use(cors())
app.use(express.json());
app.use(function (rew, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next()
})
 
app.get('/', (req, res) => {
   return res.send("ergerw")
})
 
app.listen(process.env.PORT || 5000), () => console.log(`listening on port ${PORT}!`);
