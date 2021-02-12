const router = require("express").Router();
const { api } = require("../controllers/api");

router.get("/", api);

module.exports = router;
