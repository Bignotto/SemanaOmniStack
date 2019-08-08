require('dotenv').config();
const express =  require('express');
const mongoose = require('mongoose');


const app = express();

let db_user = String(process.env.DB_STR);
//console.log(db_user);

mongoose.connect(db_user,{
    useNewUrlParser: true,
});

app.use(express.json());
app.use(require('./routes'));

app.listen(3333);
 