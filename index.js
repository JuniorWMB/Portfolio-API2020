const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT_KEY;

const mongoose = require("mongoose");

//je me connecte a ma base de données
const URI = process.env.MONGODB_URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const formRoute = require("./routes/form.js");
app.use(formRoute);

app.get("/", function (req, res) {
  res.send("This my PortFolio 2020");
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(port, "0.0.0.0", () => {
  console.log("Server started......");
});
