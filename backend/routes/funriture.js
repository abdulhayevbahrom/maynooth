const { Router } = require("express");
const FurnitureDB = require("../models/furnitureModel");

const furniture = Router();

// get Data
furniture.get("/all", async (req, res) => {
  let allData = await FurnitureDB.find();
  if (allData.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No data found", innerData: allData });
  }

  res
    .status(200)
    .json({ success: true, message: "data found", innerData: allData });
});

// Create Data
furniture.post("/create", async (req, res) => {
  try {
    let pro = req.body;
    let newPro = await FurnitureDB.create(pro);

    res
      .status(201)
      .json({ success: true, message: "data created", innerData: newPro });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      innerData: null,
      err,
    });
  }
});

module.exports = { furniture };
