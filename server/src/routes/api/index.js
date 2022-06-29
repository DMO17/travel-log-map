const { Router } = require("express");
const pin = require("./pin");
// const user = require("./user");

const router = Router();

// router.use("/user", user);
router.use("/pin", pin);

module.exports = router;
