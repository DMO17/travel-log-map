const { Router } = require("express");
const { createUser } = require("../../controllers/api/user");

const router = Router();

router.post("/register", createUser);

module.exports = router;
