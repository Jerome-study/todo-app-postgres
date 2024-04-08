const express = require("express");
const authRoute = require("./routes/auth");
const apiRoute = require("./routes/api");
const session = require("express-session");
const passport = require("passport");
const pgStore = require('connect-pg-simple')(session);
const pool = require("./config/db");
const cors = require("cors");
const { verify } = require("./middleware/auth");

const app = express();

require('dotenv').config();
app.use(express.json());

// passport
require("./config/passport");

app.use(cors({
    origin: process.env.ORIGINURL || "http://localhost:5173",
    credentials: true
}));

const cookieConfig = {
    maxAge: 1000 * 60 * 60 * 24,
    secure: false,
    sameSite: "none",
    httpOnly:true
}

if (process.env.NODE_ENV == "production") {
    cookieConfig.secure = true
    cookieConfig.sameSite = "none"
}


app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: cookieConfig,
    store: new pgStore({
        pool,
        createTableIfMissing: true
    }),
    proxy: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use("/auth", authRoute);
app.use("/api", verify, apiRoute);
app.get("/isLoggedIn", (req,res) => {
    if (req.user) return res.send({ message: true});
    res.send({ message: false });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});