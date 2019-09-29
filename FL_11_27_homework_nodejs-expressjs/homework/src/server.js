const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const routes = require('./routes');
const port = 3000;

app.use(bodyparser.json());
app.use(routes);

app.listen(port, () => console.log(`App listening on port ${port}!`));
