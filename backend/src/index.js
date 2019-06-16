require('dotenv').config();
const express =  require('express');
const mongoose = require('mongoose');


const app = express();

let db_user = String(process.env.DB_STR);

mongoose.connect(db_user,{
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);
