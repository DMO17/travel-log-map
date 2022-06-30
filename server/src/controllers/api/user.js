const { User } = require("../../models");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if ((!username, !email, !password)) {
      console.log(
        `[ERROR]:  Failed to create a new pin | The correct fields are required`
      );

      return res
        .status(400)
        .json({ success: false, error: "Failed to create user" });
    }

    const newUser = await User.create({ username, email, password });

    return res.json({ success: true, data: newUser });
  } catch (error) {
    console.log(`[Error]: Failed to create user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create new user" });
  }
};

module.exports = { createUser };
