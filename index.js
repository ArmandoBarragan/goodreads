const express = require('express');
const bodyParser = require('body-parser');

const settings = require("./config/settings")
const companyRouter = require("./app/views/company")
const userRouter = require("./app/views/user")
const authorRouter = require("./app/views/author")
const bookRoter = require("./app/views/book")
const authenticationRouter = require("./app/views/authentication")

const app = express();

// Middleware
app.use(bodyParser.json());

// Project Routes
app.use("", companyRouter);
app.use("/user", userRouter);
app.use("/author", authorRouter);
app.use("/book", bookRoter);
app.use("/auth", authenticationRouter);

app.listen(settings.PORT, () => {
  console.log(`Server listening at http://localhost:${settings.PORT}`);
});
