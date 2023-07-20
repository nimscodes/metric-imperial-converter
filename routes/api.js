"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const input = req.query.input;

    //Check if input is provided
    if (!input) {
      return res.json({ error: "Input is required" });
    }

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    // Check if both number and unit are invalid
    if (initNum === "invalid number" && initUnit === "invalid unit") {
      return res.status(200).json({ error: "invalid number and unit" });
    }

    // Check if number is invalid
    if (initNum === "invalid number") {
      return res.status(200).json({ error: "invalid number" });
    }

    // Check if unit is invalid
    if (initUnit === "invalid unit") {
      return res.status(200).json({ error: "invalid unit" });
    }

    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    // Send response
    res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: toString,
    });
  });
};
