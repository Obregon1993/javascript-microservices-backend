module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "my temporal secret",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "",
    user: process.env.MYSQL_USER || "sql5682541",
    password: process.env.MYSQL_PASS || "JiX6xTZsYP",
    database: process.env.MYSQL_DB || "sql5682541",
    port: process.env.MYSQL_PORT || 3306,
  },
  mysqlService: {
    port: process.env.MYSQL_SRV_PORT || 3001,
    host: process.env.MYSQL_SRV_HOST || "localhost",
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
};
