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

app.post("/login", (req, res) => {
  const { username, password } = req.body
  console.log({ username, password })
  res.status(200).send("Login SuccessFull");
})

app.listen(port, () => {
  console.log(`Server Started On : localhost:${port}`)
})
