const mongoose = require('mongoose');

const connectToDb = async () => {
  await mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("Databse is connected.")
  })
  .catch((err) => {
    console.log(err)
  })
}

module.exports = connectToDb;