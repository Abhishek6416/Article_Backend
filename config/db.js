const mongoose = require("mongoose");
const DB_CONNECT = async () => {
  const URL = process.env.MONGO_URL;
  return mongoose
    .connect(URL,{serverSelectionTimeoutMS: 30000, // 30 seconds
    connectTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000 })
    .then((res) => console.log(res.connection.db.databaseName))
    .catch((er) => console.log(er));
};
module.exports = DB_CONNECT;
