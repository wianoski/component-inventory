import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as sessionAuth from "./middleware/sessionAuth";
import * as routes from "./routes";

// initiatize config
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = 8080;

const app = express();

// tslint:disable-next-line:comment-format
//Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config sessions auth
sessionAuth.register( app );

// config router
routes.register( app );

// start express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("starting at " + port);
});
