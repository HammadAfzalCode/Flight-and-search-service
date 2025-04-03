const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/server-config.js');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
const { City, Airplane } = require('./models/index');

const setupAndStartServer = async () => {
  // create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api', ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
      console.log("DB synced successfully");
    }
    // const city = await City.findOne({
    //   where: {
    //     id: 1
    //   } 
    // });
    // const Airports = await city.getAirports(); // this do the join by itself. but without db sync it wont work
    // console.log(Airports);
  });
}

setupAndStartServer();