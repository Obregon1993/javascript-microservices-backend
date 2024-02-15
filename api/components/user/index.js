const ctrl = require("./controller");
const store = require("../../../store/remote-mysql");
//const store = require("../../../store/mysql");
// const store = require("../../../store/dummy");

module.exports = ctrl(store);
