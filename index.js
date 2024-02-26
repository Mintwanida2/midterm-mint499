const express = require('express');
const morgan = require('morgan');
const studentRouter = require('./students/index');
const{createWriteStream} = require('fs');
const { Stream } = require('stream');

const app = express();

const accessLogStream = createWriteStream('access.log',{flags:'a'});
app.use(express.static('public'))
app.use(morgan('common',{immediate:true,stream:accessLogStream}));
app.use('/students',studentRouter);

app.get('/',(request,response) => {response.redirect('/students')})

app.listen(8000, () => {
    console.log('Server is lintening to http://localhost:8000');
});