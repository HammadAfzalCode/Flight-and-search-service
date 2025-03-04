const express = require('express');
const bodyParser = require('body-parser');

const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');

const PORT = ServerConfig.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  Logger.info(`Server is running on port ${PORT}`, {});
});
 