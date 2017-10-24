const express = require('express');
//const router = express.Router();
const app = express();
module.exports = app;
const log = console.log;
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{res.send('Hello Word!');log('app.get')});

app.post('/author', (req,res) => {res.send({name:'Péter'});log('app.post')});

app.listen(port, () =>{
    console.log(`Server started listening on port: ${port}`);
});
