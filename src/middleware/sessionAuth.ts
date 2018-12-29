/* eslint-disable camelcase */
import { ExpressOIDC } from "@okta/oidc-middleware";
import session from "express-session";

export const register = ( app: any ) => {
	const oidc = new ExpressOIDC({
		issuer: "https://dev-288700.oktapreview.com/oauth/default",
		// tslint:disable-next-line:object-literal-sort-keys
		client_id: "0oainiwuhwCe8KzSl0h7",
		client_secret: "5Sp2gki7OPh2MIGwYHmb1YW_t8UWjhk7ghsiy1jX",
		redirect_uri: "http://localhost:8080/authorization-code/callback",
		scope: "openid profile"
	});

	// Configure Express to use auth sessions
	app.use(session({
		resave: true,
		saveUninitialized: false,
		secret: "maothisisasessionsigning"
	}));
	// config express to oidc client router
	app.use( oidc.router );

	// add oidc client to app locals
	app.locals.oidc = oidc;
};
