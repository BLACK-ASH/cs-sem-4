
import express from "express"
import { Product } from "../Data/product.js"

export const productRouter = express.Router()

productRouter.get("/all", (req, res) => {
  const products = Product.findMany()
  res.status(200).json(products)
})

productRouter.post("/create", (req, res) => {
  const product = req.body
  if (!product) res.status(400).json({ message: "Invalid Data." })
  const data = Product.insert(product)
  res.status(201).json(data)
})
