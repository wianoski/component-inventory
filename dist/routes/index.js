"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = (app) => {
    const oidc = app.locals.oidc;
    // define router handler for default home landing
    app.get("/", (req, res) => {
        const user = req.userContext ? req.userContext.userinfo : null;
        res.render("index", { isAuthenticated: req.isAuthenticated(), user });
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
        const user = req.userContext ? req.userContext.userinfo : null;
        res.render("components", { isAuthenticated: req.isAuthenticated(), user });
    });
};
//# sourceMappingURL=index.js.map