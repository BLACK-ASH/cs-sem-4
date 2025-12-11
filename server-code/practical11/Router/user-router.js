import express from "express"
import { User } from "../Data/user.js"

export const userRouter = express.Router()

// Get All User
userRouter.get("/all", (req, res) => {
  const users = User.findMany()
  res.status(200).json(users)
})

// Get Single User By id 
userRouter.get("/id/:id", (req, res) => {
  const id = req.params.id
  const data = User.findById(id)
  res.status(200).json(data)
})

// Create User
userRouter.post("/create", (req, res) => {
  const user = req.body
  if (!user) return res.status(400).json({ message: "Invalid Data." })
  const data = User.insert(user)
  res.status(201).json(data)
})

// Update User
userRouter.put("/update/:id", (req, res) => {
  const user = req.body
  const id = req.params.id
  const data = User.update(id, user)
  res.status(201).json(data)
})

// Delete User
userRouter.delete("/id/:id", (req, res) => {
  const id = req.params.id
  const data = User.delete(id)
  if (data) return res.status(200).json({ message: "User Deleted Successfully." })
  res.status(400).json({ error: "Error Deleting User." })
})

