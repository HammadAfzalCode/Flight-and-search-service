const express = require("express");
const { infoController } = require("../../controllers");
const { cityController } = require("../../controllers");

const router = express.Router();

router.get("/info", infoController.info);
router.post("/city", cityController.create);
router.get("/city/:id", cityController.get)
router.put("/city/:id", cityController.update)
router.delete("/city/:id", cityController.destroy)
module.exports = router;
