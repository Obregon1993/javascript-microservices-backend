const request = require("request");

//this works as a constructor
function createRemoteDB(host, port) {
  const URL = "http://" + host + ":" + port;

  function list(table) {
    return req("GET", table);
  }

  function get(table, id) {
    return req("GET", table, id);
  }

  function insert(table, data) {
    return req("POST", table, data);
  }

  function update(table, data) {
    return req("PUT", table, data);
  }

  function upsert(table, data) {
    if (data.id) {
      return update(table, data);
    }

    return insert(table, data);
  }

  function query(table, query, join) {
    return req("POST", table + "/query", { query, join });
  }

  function req(method, table, data) {
    let url = URL + "/" + table;
    body = "";

    return new Promise((resolve, reject) => {
      request(
        {
          method,
          headers: { "Content-Type": "application/json" },
          url,
          body,
        },
        (err, req, body) => {
          if (err) {
            console.error("error with the remote database", err);
            return reject(err.message);
          }
          const resp = JSON.parse(body);
          return resolve(resp.body);
        }
      );
    });
  }

  return { list, get };
}

module.exports = createRemoteDB;
