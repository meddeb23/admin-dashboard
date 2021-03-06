const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const path = require("path");

const app = express();

require("dotenv").config({
  path: path.join(process.cwd(), "/server/config/.env"),
});

// Connect to a data base
const db = mongoose
  .connect(process.env.LOCAL_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`database connected`))
  .catch((err) => console.error(err));

//   Basic security
app.use(helmet());

// // cors middleware
// app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// cookie parser middleware
app.use(cookieParser());
// Morgan
app.use(morgan("common"));

app.use("/api/v1/client", require("./routers/api/client"));
app.use("/api/v1/user", require("./routers/api/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on PORT ${PORT} on ${process.env.NODE_ENV}`)
);
