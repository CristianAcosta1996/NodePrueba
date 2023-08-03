require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;

app.use(express.static("public"));

app.use("/hello", (req, res) => {
  res.send("Hola mundo!!!");
});

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
