const express = require('express');
const router = express.Router();

const listAction =require('./controller');

router.get('/',listAction);
// ES module 
module.exports=router; 