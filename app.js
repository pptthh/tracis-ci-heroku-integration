const express = require('express');
//const router = express.Router();
const app = express();
module.exports = app;
const log = console.log;

app.get('/', (req,res)=>{res.send('Hello Word!');log('app.get')});

app.post('/author', (req,res) => {res.send({name:'Péter'});log('app.post')});

app.listen(3000, () =>{
    console.log('Server started listening on port: 3000');
});
