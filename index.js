const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./swagger.json');

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => console.log(`App listening on port ${port}!`));
