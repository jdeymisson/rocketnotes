require("express-async-errors");
const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");
const database = require("./database/sqlite");

const app = express();
app.use(express.json());

app.use(routes);

database();

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      error: "error",
      message: error.message
    });
  };

  console.log(error);

  return response.status(500).json({
    error: "error",
    message: "Internal server side error"
  });
});

const PORT = 2221;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));