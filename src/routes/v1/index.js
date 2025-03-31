const express = require("express");
const { infoController } = require("../../controllers");
const { cityController } = require("../../controllers");

const router = express.Router();

router.get("/info", infoController.info);
router.post("/city", cityController.create);
module.exports = router;
