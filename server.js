const express = require('express');
var route = require('./Router/importer'),
    parser= require("body-parse"),
    app = express();
app.use(parser.json());
app.use('/api/', route);
app.listen(3500);

//http://localhost:3500/api/post

