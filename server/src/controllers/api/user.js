const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { signToken } = require("../../util/auth");

const signUp = async (req, res) => {
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

    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.json({ success: true, data: newUser });
  } catch (error) {
    console.log(`[Error]: Failed to create user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create new user" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      console.log(`[ERROR]:  Failed to login | Incorrect username `);

      return res
        .status(400)
        .json({ success: false, error: "Failed to login " });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      console.log(`[ERROR]:  Failed to login | Incorrect password `);

      return res
        .status(400)
        .json({ success: false, error: "Failed to login " });
    }

    return res.json({ success: true, token: signToken(user) });
  } catch (error) {
    console.log(`[Error]: Failed to login | ${error.message}`);
    return res.status(500).json({ success: false, error: "Failed to login" });
  }
};

module.exports = { signUp, login };
