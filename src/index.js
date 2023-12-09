const express = require("express");

const app = express();
const port = 3005;

let products = [
  { id: 1, title: "iphone 13", price: 300 },
  { id: 2, title: "iphone 14", price: 300 },
  { id: 3, title: "iphone 15", price: 300 },
];

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});

app.get("/products", (req, res) => {
  res.send({
    products: products,
  });
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);
  res.send({
    product: product,
  });
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
