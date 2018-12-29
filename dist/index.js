"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const sessionAuth = __importStar(require("./middleware/sessionAuth"));
const routes = __importStar(require("./routes"));
// initiatize config
dotenv_1.default.config();
// port is now available to the Node.js runtime
// as if it were an environment variable
const port = 8080;
const app = express_1.default();
// tslint:disable-next-line:comment-format
//Configure Express to use EJS
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
// config sessions auth
sessionAuth.register(app);
// config router
routes.register(app);
// start express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("starting at " + port);
});
//# sourceMappingURL=index.js.map