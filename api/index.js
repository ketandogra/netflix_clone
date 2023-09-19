const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const Port = process.env.PORT || 5000
const db = require("./config/mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")
const bodyParser = require("body-parser")
db()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/movies",movieRoute)
app.use("/api/lists",listRoute)

app.listen(Port, () => {
  console.log(`Server is running at PORT ${Port}`)
})