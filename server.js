const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
connectDb();
//adding middleware
app.use(express.json());
app.use(errorHandler);
app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use("/api/users", require("./Routes/userRoutes"));
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
