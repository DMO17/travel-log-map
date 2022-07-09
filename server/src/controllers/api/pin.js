const { Pin } = require("../../models");

const getAllPins = async (req, res) => {
  try {
    const pins = await Pin.find({});
    res.json({ success: true, data: pins });
  } catch (error) {
    console.log(`[Error]: Failed to get pin data | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get pin data" });
  }
};

const createPin = async (req, res) => {
  try {
    const { title, description, rating, lat, long } = req.body;

    if (!title && !description && !rating && !lat && !long) {
      console.log(
        `[ERROR]:  Failed to create a new pin | The correct fields are required`
      );

      return res.status(400).json({
        success: false,
        error: "Failed to create new pin",
      });
    }

    const newPin = await Pin.create({
      username: req.user.username,
      title,
      description,
      rating,
      lat,
      long,
    });

    return res.json({ success: true, data: newPin });
  } catch (error) {
    console.log(`[Error]: Failed to create a new pin | ${error.message}`);
  }
};

module.exports = { getAllPins, createPin };
