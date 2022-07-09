const { Router } = require("express");
const { getAllPins, createPin } = require("../../controllers/api/pin");
const { authMiddleware } = require("../../util/auth");

const router = Router();

router.get("/", getAllPins);
router.post("/", authMiddleware, createPin);

module.exports = router;
