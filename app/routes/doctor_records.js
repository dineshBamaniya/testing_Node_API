const express = require("express");
const router = express.Router();

let getUsersData = require("../repository/doctorDB");

router.get("/dataList", async (req, res) => {
  console.log('res===', res);
    try {
      res.status(200).json({
        data: getUsersData
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });