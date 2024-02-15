const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

//ROUTES
router.get("/", list);

//FUNCTIONS

function list(req, res, next) {
  Controller.list()
    .then((list) => response.success(req, res, list, 200))
    .catch(next);
}

module.exports = router;
