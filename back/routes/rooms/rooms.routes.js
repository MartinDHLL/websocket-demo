const router = require("express").Router();
const controllers = require("./rooms.controllers");

router.get("/", controllers.getAll);

module.exports = router;
