const redis = require("redis");
const config = require("../config");

const client = redis.createClient({
  password: config.redis.password,
  socket: {
    host: config.redis.host,
    port: config.redis.port,
  },
});

client.connect();

client.on("error", (err) => console.error("Redis Client Error", err));

// function list(table) {
//   return new Promise((resolve, reject) => {
//     client.get(table, (err, data) => {
//       if (err) return reject(err);

//       let res = data || null;
//       if (data) {
//         res = JSON.stringify(data);
//       }
//       resolve(res);
//     });
//   });
// }

async function list(table) {
  try {
    const value = await client.get(table);
    return value ? JSON.parse(value) : null;
  } catch (err) {
    console.error(err);
    throw err; // Propagar el error para manejarlo más adelante.
  }
}

function get(table, id) {}

async function upsert(table, data) {
  let key = table;
  if (data && data.id) {
    key = key + "_" + data.id;
  }
  client.setEx(key, 10, JSON.stringify(data));
  return true;
}

module.exports = { list, get, upsert };
