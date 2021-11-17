const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const app = express();

// Importing routes
const customerRoutes = require("./routes/customers");
const { urlencoded } = require("express");

// Settings
app.set("port", process.env.PORT || 7000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "",
      port: 3306,
      database: "crudnodejs",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", customerRoutes);

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
