import express from "express";

const app = express();
const databaseconnection="mongodb://localhost:27017/social_network"

// Routes are here
import authRoutes from "./routes/authentication.js";
// Routes are here

// Database connection done
import connect from "./database/connection.js";
connect(databaseconnection);
// database conneection closed

app.use("/authentication", authRoutes);
const PORT = 5000;
app.get("/", (req, res) => {
  res.send("this is the home page");
});
app.listen(PORT, () => {
  console.log(`server listeneing at ${PORT}`);
});
