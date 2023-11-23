const express = require('express');
const { PORT } = require("./config/settings")
const companyRouter = require("./app/views/company")


const app = express();
app.use("", companyRouter)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
