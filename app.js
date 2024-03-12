const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config()
const { connectToLibary } = require("./config")
const userRoute = require("./routes/userRoute")
const libaryRoute = require("./routes/libaryRoute")
const appError = require("./utils/errorHandle")
const errorHandler = require("./controllers/errorController")

const PORT = process.env.PORT || 8000;

const app = express();
connectToLibary();

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Welcome to e-libary");
});

app.post("/signup", controller.signUp);
app.post("/login", controller.login);
app.post("/logout", controller.logout);
app.post("reactivate", controller.reactivateAccount);

app.use("/user", userRoute);
app.use("/libary", libaryRoute);

app.all("*", (req, res, next) => {
  next(new appError("page not found", 404));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
