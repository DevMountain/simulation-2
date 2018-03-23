const bodyParser = require('body-parser');
const axios = require('axios');
const ctrl = require('./controller');
const express = require('express');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 4000
const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then( (db) => {
    app.set('db', db);
});




app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/deletehouse/:id', ctrl.deleteHouse)

app.listen(port, ()=> console.log(`server is listening on port ${port}`))