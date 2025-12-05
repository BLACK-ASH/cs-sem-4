import express from "express"
import { logger } from "./middleware/looger.js";

const port = 4000
const app = express()

// Middleware
app.use(express.json())
app.use(logger)

app.get("/", (req, res) => {
  res.send("Hello World!, From Server.")
})

app.get("/about", (req, res) => {
  res.send("This Is About Page")
})

app.get("/contact", (req, res) => {
  res.send("This Is Contact Page")
})

app.listen(port, () => {
  console.log(`Server Started On : localhost:${port}`)
})
