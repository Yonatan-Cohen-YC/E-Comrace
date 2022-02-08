const express = require("express");
const app = express();
const cors = require("cors");
const databaseConnection = require("./server/db");

// Import routes
const usersRoute = require("./server/routes/user");
const productsRoute = require("./server/routes/product");
const cartRoute = require("./server/routes/cart");

const PORT = process.env.PORT || 5000;

require("dotenv").config();

// Middlewear
app.use(express.json());
app.use(cors());

//Routes
app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/cart", cartRoute);

// Datebase Connection
databaseConnection();

app.get("/", (req, res) => {
  res.send("Weolcome");
});

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
