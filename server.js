const express = require("express");
const app = express();
const cors = require("cors");
const databaseConnection = require("./server/db");
const bodyParser = require("body-parser");

// Import routes
const usersRoute = require("./server/routes/user");
const productsRoute = require("./server/routes/product");
const cartRoute = require("./server/routes/cart");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

require("dotenv").config();

// Middlewear
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

//Routes
app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/cart", cartRoute);

// Datebase Connection
databaseConnection();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
