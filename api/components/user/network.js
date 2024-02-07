const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");
const secure = require("./secure");

const router = express.Router();

//ROUTES
router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure("update"), upsert);

//FUNCTIONS

function list(req, res, next) {
  Controller.list()
    .then((list) => response.success(req, res, list, 200))
    .catch(next);
}

function get(req, res, next) {
  Controller.get(req.params.id)
    .then((user) => response.success(req, res, user, 200))
    .catch(next);
}

function upsert(req, res, next) {
  Controller.upsert(req.body)
    .then((user) => response.success(req, res, user, 201))
    .catch(next);
}

function remove(req, res, next) {
  Controller.get(req.params.id)
    .then((user) => response.success(req, res, user, 200))
    .catch(next);
}

module.exports = router;
