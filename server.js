const express = require("express");
const app = express();
const cors = require("cors");
const databaseConnection = require("./server/db");

const usersRoute = require("./server/routes/user");

const PORT = process.env.PORT || 5000;

require("dotenv").config();

// Middlewear
app.use(express.json());
app.use(cors());

//Routes
app.use("/users", usersRoute);

// Datebase Connection
databaseConnection();

app.get("/", (req, res) => {
  res.send("Weolcome");
});

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
