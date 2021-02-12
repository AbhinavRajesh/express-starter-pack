const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const apiRouter = require("./routes/api");
const mainRouter = require("./routes/main");

app.set("view engine", "ejs");
app.use("/assets/css", express.static(__dirname + "/assets/css"));
app.use("/assets/img", express.static(__dirname + "/assets/img"));
app.use("/assets/js", express.static(__dirname + "/assets/js"));

const PORT = process.env.PORT || 5000;
require("dotenv").config();

// * Passport Config
// require("./config/passport")(passport);

// * MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// * Express Sessions
// app.use(
//   expressSession({
//     secret: process.env.PASSWORD_HASH,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(helmet());

app.use("/api", apiRouter);
app.use("/", mainRouter);

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World!" });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
