const express = require("express");
const { connect } = require("mongoose");
const app = express();
require("colors");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

// Connect to mongoDb
connect(process.env.MONGODB)
  .then(() => console.log("Connect to Database".bgGreen))
  .catch(() => console.log("NOT Connect to Database".bgRed));

app.get("/", (req, res) => res.send("app is running"));

// ENDPOINTS
const { furniture } = require("./routes/funriture");
app.use("/pro", furniture);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`.bgCyan));
