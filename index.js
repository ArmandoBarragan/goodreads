const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require("./config/settings")
const companyRouter = require("./app/views/company")
const userRouter = require("./app/views/user")
const authorRouter = require("./app/views/author")
const bookRoter = require("./app/views/book")

const app = express();

// Middleware
app.use(bodyParser.json());

// Project Routes
app.use("", companyRouter);
app.use("/user", userRouter);
app.use("/author", authorRouter);
app.use("/book", bookRoter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
