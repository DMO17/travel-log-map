const { Schema, model } = require("mongoose");

const userSchema = {
  username: {
    type: String,
    required: true,
    min: 5,
    max: 30,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
};

const schema = new Schema(userSchema, { timestamps: true });

const User = model("User", schema);

module.exports = User;
