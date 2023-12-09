const express = require("express");

const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});

app.get("/products", (req, res) => {
  res.send({
    products: [
      { id: 1, title: "iphone 13", price: 300 },
      { id: 2, title: "iphone 14", price: 300 },
      { id: 3, title: "iphone 15", price: 300 },
    ],
  });
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});

