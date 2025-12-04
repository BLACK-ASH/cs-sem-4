import express from "express"

const port = 4001

const app = express()
app.use(express.json())

let users = [
  {
    id: "user1",
    username: "Ashif Shaikh",
    class: "SY CS",
    rollNo: 32
  },
  {
    id: "user2",
    username: "Arshad Shaikh",
    class: "SY CS",
    rollNo: 31
  },
  {
    id: "user3",
    username: "Farhan Shaikh",
    class: "SY CS",
    rollNo: 53
  },
  {
    id: "user4",
    username: "Raza Shaikh",
    class: "SY CS",
    rollNo: 49
  },
  {
    id: "user5",
    username: "Rounak Pal",
    class: "SY CS",
    rollNo: 46
  },
  {
    id: "user6",
    username: "Harish Pandey",
    class: "SY CS",
    rollNo: 24
  },
  {
    id: "user7",
    username: "Harsh Salvi",
    class: "SY CS",
    rollNo: 29
  },
  {
    id: "user8",
    username: "Sachin D. Jaiswal",
    class: "SY CS",
    rollNo: 16
  },
  {
    id: "user9",
    username: "Vaibhav Soyane",
    class: "SY CS",
    rollNo: 45
  },
  {
    id: "user10",
    username: "Mayur Suryavanshi",
    class: "SY CS",
    rollNo: 42
  },
]

app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>")
})

app.get("/users", (req, res) => {
  res.status(200).json(users)
})


app.post("/users", (req, res) => {
  const user = req.body
  users.push(user)
  res.status(201).json("User Added Successfull.")
})

app.put("/users", (req, res) => {
  const user = req.body
  users = users.filter((u) => u.id !== user.id)
  users.push(user)
  res.status(201).json("User Updated Succesfull.")
})

app.delete("/users", (req, res) => {
  const id = req.body.id
  users = users.filter((u) => u.id !== id)
  res.status(201).json("User Deleted Succesfull.")
})

app.listen(port, () => {
  console.log("server started")
})
