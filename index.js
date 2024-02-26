const express = require('express');
const morgan = require('morgan');
const movieRouter = require('./movie/index');
const{createWriteStream} = require('fs');
const { Stream } = require('stream');

const app = express();

const accessLogStream = createWriteStream('access.log',{flags:'a'});
app.use(express.static('public'))
app.use(morgan('common',{immediate:true,stream:accessLogStream}));
app.use('/movie',movieRouter);

app.get('/',(request,response) => {response.redirect('/movie')})

app.listen(3000, () => {
    console.log('Server is lintening to http://localhost:3000');
});