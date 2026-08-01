const mongoose = require('mongoose');

function connectToDb(){
  mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("Database is connect.")
  })
  .catch((err) => {
    console.log(`Fail to connect with DB : ${err}`)
  })
}

module.exports = connectToDb;