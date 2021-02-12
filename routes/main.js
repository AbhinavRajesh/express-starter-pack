const router = require("express").Router();
const { home } = require("../controllers/main");

router.get("/", home);

module.exports = router;
