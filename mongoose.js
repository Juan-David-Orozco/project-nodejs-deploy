const mongoose = require("mongoose")
require("dotenv").config()

const connectMongoDB = async () => {
  try {
    db = await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/test_db')
    console.log(`MongoDB Connected, DB: ${db.connection.name}`)
  } catch (error) {
    console.error(error)
  }
}

module.exports = { connectMongoDB }

/*
mongoose.connect("mongodb+srv://JuanDavid29:Dinastia_7@cluster0.7gnzcru.mongodb.net/testDB?retryWrites=true&w=majority")
  .then((db) => console.log(db.connection.name))
  .catch((err) => console.error(err))
*/

