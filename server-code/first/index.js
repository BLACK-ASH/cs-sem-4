const http = require("http")
const { addNumber } = require("./add")

const app = http.createServer((req, res) => {
  const url = req.url

  if ("/" === url) {
    res.write("This Is Home Page")
    res.end()
  }

  else if ("/about" === url) {
    res.write("This Is About Page")
    res.end()
  }

  else if ("/add" === url) {
    res.write("This Is About Page")
    res.write("\n")
    res.write(`${addNumber(12, 24)}`)
    res.end()
  }

  else if ("/contact" === url) {
    res.write("This Is Contact Page")
    res.end()
  }

  else {
    res.write("Page Not Found")
    res.end()
  }

})

console.log(addNumber(12, 24))

app.listen(4001, () => {
  console.log("Server Started At Port ", 4001)
})

