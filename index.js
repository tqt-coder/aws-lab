const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var cookieParser = require('cookie-parser');
const path = require('path');

const port = 8888;
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(cors());

const RouterPage = require('./router/Routerpage');
const AccountRouter = require('./router/AccountRouter');
app.use('/', RouterPage);
app.use('/account', AccountRouter);

console.log(`Orders service listening on port ${port}`);
app.listen(port);
