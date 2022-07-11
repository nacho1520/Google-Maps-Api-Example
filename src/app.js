//***** Require´s *****/
const express = require('express');
const path = require('path');

//***** Server initialization *****/
const app = express();

//***** Server configuration *****/
app.set('port', 3000);
app.use(express.static('public'));

//***** Templates engine *****/
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

//***** Routes System configuration *****/
const mainRouter = require('./routes/main.router');
app.use(mainRouter);

//***** Running up server *****/
app.listen(app.get('port'), () => console.log(`Server up & running in port ${app.get('port')}`));

