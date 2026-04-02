require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "127.0.0.1"

const auth = require("./routes/auth")
const routes = require("./routes/routes")

app.use(express.json())
app.use(auth)
app.use("/api", routes)

app.listen(PORT, HOST, () => {
	console.log(`[server] listening on ${HOST}:${PORT}`)
})