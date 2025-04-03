const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/server-config.js');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
// const {Airplane} = require('./models/index');

const setupAndStartServer = async () => {
  // create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    // if (process.env.SYNC_DB) {
    //   // db.sequelize.sync({ alter: true });
    //   // console.log("DB synced successfully");
    // }
  });
}

setupAndStartServer();