import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import hbs from "hbs";
import session from "express-session";
import mongoConnectSession from "connect-mongodb-session";
import path from "path";
import passportSetup from "@utils/passport_setup.utils";
import { catch404, errorHandler } from "@middlewares/errorHandlers.middleware";

const app = express();

app.use(helmet());
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// sessions setup
const MongoDbStore = mongoConnectSession(session);
const sessionStore = new MongoDbStore({
    uri: process.env.DATABASE_URL,
    collection: "sessions",
});
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000 * 7,
        },
        store: sessionStore,
    })
);
// Passportjs setup
app.use(passport.initialize());
app.use(passport.session());
passportSetup(passport);
// Views setup
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));
app.engine("html", hbs.__express);
hbs.registerPartials(path.join(__dirname, "views", "partials"), function () {
    console.log("[INFO] Partials have been registered");
});

// ROUTES

// ERROR HANDLERS
app.get("*", catch404);
app.use(errorHandler);

export default app;
