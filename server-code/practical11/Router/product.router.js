import express from "express"
import { Product } from "../Data/product.js"

export const productRouter = express.Router()

// Get All Product
productRouter.get("/all", (req, res) => {
  const products = Product.findMany()
  res.status(200).json(products)
})

// Get Single Product By id 
productRouter.get("/id/:id", (req, res) => {
  const id = req.params.id
  const data = Product.findById(id)
  res.status(200).json(data)
})

// Create Product
productRouter.post("/create", (req, res) => {
  const product = req.body
  if (!product) return res.status(400).json({ message: "Invalid Data." })
  const data = Product.insert(product)
  res.status(201).json(data)
})

// Update Product
productRouter.put("/update/:id", (req, res) => {
  const product = req.body
  const id = req.params.id
  const data = Product.update(id, product)
  res.status(201).json(data)
})

// Delete Product
productRouter.delete("/id/:id", (req, res) => {
  const id = req.params.id
  const data = Product.delete(id)
  if (data) return res.status(200).json({ message: "Product Deleted Successfully." })
  res.status(400).json({ error: "Error Deleting Product." })
})


