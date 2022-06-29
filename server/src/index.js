const express = require("express");
const mongoose = require("mongoose");

const PORT = 3002;

const app = express();

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

const init = async () => {
  app.listen(PORT, () =>
    console.log(`Server Running on http://localhost:${PORT}`)
  );

  await mongoose.connect("mongodb://localhost:27017/travel-log-map", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("[INFO] : Successfully connected to db");

  try {
  } catch (error) {
    console.log(`[ERROR] : Connection to db has failed\ ${error.message}`);
  }
};

init();
