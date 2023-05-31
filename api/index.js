const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => res.send('Hello World!'));

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening on port ${port}!`));
