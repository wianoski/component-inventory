"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
const oidc_middleware_1 = require("@okta/oidc-middleware");
const express_session_1 = __importDefault(require("express-session"));
exports.register = (app) => {
    const oidc = new oidc_middleware_1.ExpressOIDC({
        issuer: "https://dev-288700.oktapreview.com/oauth/default",
        // tslint:disable-next-line:object-literal-sort-keys
        client_id: "0oainiwuhwCe8KzSl0h7",
        client_secret: "5Sp2gki7OPh2MIGwYHmb1YW_t8UWjhk7ghsiy1jX",
        redirect_uri: "http://localhost:8080/authorization-code/callback",
        scope: "openid profile"
    });
    // Configure Express to use auth sessions
    app.use(express_session_1.default({
        resave: true,
        saveUninitialized: false,
        secret: "maothisisasessionsigning"
    }));
    // config express to oidc client router
    app.use(oidc.router);
    // add oidc client to app locals
    app.locals.oidc = oidc;
};
//# sourceMappingURL=sessionAuth.js.map