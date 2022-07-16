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

    const loginUser = await User.findOne({ username });

    if (!loginUser) {
      console.log(`[ERROR]:  Failed to login | Incorrect username `);

      return res.json({ success: false, error: "Failed to login " });
    }

    const validPassword = await bcrypt.compare(password, loginUser.password);

    if (!validPassword) {
      console.log(`[ERROR]:  Failed to login | Incorrect password `);

      return res.json({ success: false, error: "Failed to login " });
    }

    const accessToken = signToken(loginUser);

    req.headers = { token: `Bearer ${accessToken}` };

    return res.json({
      success: true,
      token: accessToken,
      user: {
        id: loginUser._id,
        username: loginUser.username,
        email: loginUser.email,
      },
    });
  } catch (error) {
    console.log(`[Error]: Failed to login | ${error.message}`);
    return res.status(500).json({ success: false, error: "Failed to login" });
  }
};

module.exports = { signUp, login };
