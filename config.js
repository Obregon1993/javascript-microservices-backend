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
  cacheService: {
    port: process.env.CACHE_SRV_PORT || 3003,
    host: process.env.CACHE_SRV_HOST || "localhost",
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  redis: {
    host:
      process.env.REDIS_HOST ||
      "redis-18960.c321.us-east-1-2.ec2.cloud.redislabs.com",
    password: process.env.REDIS_PASS || "itxiBiwD62vIyyaR9XPZ10HEheDLryDO",
    port: process.env.REDIS_PORT || 18960,
  },
};
