import express from "express"; import { userRouter } from "./Router/user.router.js";
import { productRouter } from "./Router/product.router.js";

const PORT = 4000;

const app = express();

app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/product", productRouter)

app.listen(PORT, () => {
  console.log("Server Started.")
})
