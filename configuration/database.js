const mongoose = require('mongoose');

const database = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongDB connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = database;
