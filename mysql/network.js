const express = require("express");
const response = require("../network/response");
const Store = require("../store/mysql");

const router = express.Router();

//ROUTES
router.get("/:table", list);
router.get("/:table/:id", get);
router.post("/:table/", insert);
router.put("/:table/", upsert);

//FUNCTIONS

function list(req, res, next) {
  Store.list(req.params.table)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, "Invalid info for mysql", 400));
}

function get(req, res, next) {
  Store.get(req.params.table, req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, "Invalid info for mysql", 400));
}

function insert(req, res, next) {
  Store.insert(req.params.table, req.body)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, "Invalid info for mysql", 400));
}

function upsert(req, res, next) {
  Store.upsert(req.params.table, req.body)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.error(req, res, "Invalid info for mysql", 400));
}

module.exports = router;
