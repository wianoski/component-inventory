"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = (app) => {
    const oidc = app.locals.oidc;
    // define router handler for default home landing
    app.get("/", (req, res) => {
        res.render("index");
    });
    // define secure router handle for login page that redirects to /components
    app.get("/login", oidc.ensureAuthenticated(), (req, res) => {
        res.redirect("/components");
    });
    // define router handle for logout
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });
    // define secure router handle for page
    app.get("/components", oidc.ensureAuthenticated(), (req, res) => {
        res.render("components");
    });
};
//# sourceMappingURL=index.js.map