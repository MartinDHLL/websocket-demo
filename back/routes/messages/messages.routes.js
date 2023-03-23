const router = require("express").Router();
const controllers = require("./messages.controllers");

router.get("/:room", controllers.getAllFromRoom);
router.post("/", controllers.make);

module.exports = router;
