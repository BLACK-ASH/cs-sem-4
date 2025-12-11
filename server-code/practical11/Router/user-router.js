import express from "express"
import { User } from "../Data/user.js"

export const userRouter = express.Router()

userRouter.get("/all", (req, res) => {
  const users = User.findMany()
  res.status(200).json(users)
})

userRouter.post("/create", (req, res) => {
  const user = req.body
  if (!user) res.status(400).json({ message: "Invalid Data." })
  const data = User.insert(user)
  res.status(201).json(data)
})
