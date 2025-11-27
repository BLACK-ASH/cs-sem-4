import express from "express"
import bcrypt from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
const port = 3000

// Middeware
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!")
})

// Login Page
app.post("/login", async (req, res) => {
  const { email, password } = req.body

  // Data Validation
  try {

    // If password is null
    if (!password.trim()) {
      res.status(400).json({ "message": "password is required." })
    }

    // If email is null
    if (!email.trim()) {
      res.status(400).json({ "message": "email is required." })
    }

    // Hashing password
    const hashPassword = await bcrypt.hash(password, 10)
    const payload = { email, "password": hashPassword }
    const token = jsonwebtoken.sign(payload, "secret")

    // Sending Response
    console.log(payload)
    res.status(200).json({ "message": "success", payload, token })
  }
  // If any error happen
  catch (error) {
    res.status(500).json({
      "message": "Internal Server Error", "detail": error.message

    })
  }
})

app.listen(port, () => {
  console.log(`Sever Started \n listen on http://localhost:${port}`)
})




