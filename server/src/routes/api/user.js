const { Router } = require("express");
const { signUp, login } = require("../../controllers/api/user");

const router = Router();

router.post("/sign-up", signUp);

router.post("/login", login);

module.exports = router;
