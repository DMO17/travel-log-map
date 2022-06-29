const { Schema, model } = require("mongoose");

const pinSchema = {
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },

  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
};

const schema = new Schema(pinSchema, { timestamps: true });

const Pin = model("Pin", schema);

module.exports = Pin;
