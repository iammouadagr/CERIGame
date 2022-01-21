require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const path = require("path");
const cors = require("cors");
const router = express.Router();
const authRouter = require("./api/routes/auth/auth");
const usersRouter = require("./api/routes/users/users");
const quizzRouter = require("./api/routes/quizz/quizz");
const pgClient = require("./config/db/pgDB");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("./config/db/mongoDB");

const app = express();
const port = process.env.PORT;

// middlewars
app.use(express.static(path.join(__dirname, "../client/dist/client")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// session middleware

const sessionStorage = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "MySession3145",
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStorage,
    cookie: {
      maxAge: 24 * 6 * 60 * 1000, // Egale un jour
    },
  })
);

// postgre DB
const pgDB = pgClient.connect((err, client, release) => {
  if (err) console.log("Erreur connection non etablie ! " + err.stack);
  else {
    console.log("Connection PG étbalie avec succés ....");
    release();
  }
});

// mongoDB

const mongodb = mongoose.connection;
mongodb.on("error", (error) => console.error(error));
mongodb.once("open", () =>
  console.log("Connection mongoDB étbalie avec succés ...")
);

// routes
app.use("/", authRouter);
app.use("/users", usersRouter);
app.use("/quizz", quizzRouter);

// port
const server = app.listen(port, () =>
  console.log("Serveur en cours  port ", port)
);

//Socket.io
let io = require("socket.io")(server, {
  cors: {
    origin: ["http://pedago.univ-avignon.fr:3146"],
  },
});

io.on("connection", (socketClient) => {
  console.log(socketClient.id);
});

//module.exports.io = io;
