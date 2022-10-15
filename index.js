const express = require("express")
const ejs = require("ejs")
const path = require("path")
const { connectMongoDB } = require("./mongoose")
const User = require("./models/User")
const pool = require("./pg")

connectMongoDB()
const app = express()

/* Settings */
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

/* Routes */
app.get('/api/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

app.get('/ping', async (req, res) => {
  const result = await pool.query(`SELECT NOW()`)
  res.json({
    message: result.rows[0].now
  })
})

app.get('/profile', (req, res) => {
  res.render('profile', {name: 'juan', age: 29})
})

/* Static Files */
app.use(express.static('public'))

/* Run Server */
app.listen(process.env.PORT || 4000)
console.log("Server on port", process.env.PORT || 4000)