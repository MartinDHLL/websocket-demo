const router = require("express").Router();
const controllers = require("./messages.controllers");

router.get("/", controllers.getAll);

module.exports = router;
