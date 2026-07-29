// iska 2 kam hia : 1) server ko start karna, 2) database se connect karna

const app = require('./src/app');
const mongoose = require('mongoose');

function connectToDb(){
  mongoose.connect("uri/day-3B(28-7-26)")  
  .then(()=>{                                             // then because we dont know when we get the resp(data)
    console.log("Database is connected successfully")
  })
  .catch((err) => {
    console.error(`Database connection failed : ${err}`);
  })
}

connectToDb()

app.listen(3000, ()=>{
  console.log("Server is now running on Port 3000")
})