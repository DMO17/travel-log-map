const { Router } = require("express");
const { getAllPins, createPin } = require("../../controllers/api/pin");

const router = Router();

router.get("/", getAllPins);
router.post("/new", createPin);

module.exports = router;
