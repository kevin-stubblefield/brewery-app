const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

const logger = require('./utils/logger.js');

const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

const routes = require('./routes');
for (let route of routes) {
    if (!route) continue;
    app.use(`/${route.name}`, require(route.file));
}

app.listen(PORT);
logger.info(`Running app on port ${PORT}`);