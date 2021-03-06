const express = require("express");
const app = express();
const swaggerUi=require('swagger-ui-express');
const morgan = require("morgan");
const bodyparser = require("body-parser");
//const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const userRoutes = require("./routes/user");

var config = require("./config");
require("./db/db-connections"); //Establishing DB connection
/*mongoose.connect(
  "mongodb+srv://sathya:sathya143@cluster0-vclou.mongodb.net/node", {
    useNewUrlParser: true
  }
);*/
//mongoose.Promise = global.Promise;
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(
  bodyparser.urlencoded({
    extended: false
  })
);
app.use(bodyparser.json());

app.use(cors());

/*app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Access-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});
*/
var YAML = require("yamljs");
var swaggerConfig = YAML.load("./swagger/swagger.yaml");


// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/user", userRoutes);
app.use("/api-dp", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status(404);
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
