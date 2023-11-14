const express = require("express");

const cors = require('cors');
const connection = require("./config/db");
const { userRouter } = require("./router/userRouter");



const app = express();
app.use(express.json());
app.use(cors({
  origin: "*"
}))
app.use("/api",userRouter)

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(4005, async () => {
  try {
    await connection();
    console.log("The port is running on 4005");
  } catch (err) {
    console.log(err, "Error occurred");
  }
});