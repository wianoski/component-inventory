/* eslint-disable camelcase */
import { ExpressOIDC } from "@okta/oidc-middleware";
import session from "express-session";

export const register = ( app: any ) => {
	const oidc = new ExpressOIDC({
		client_id: process.env.OKTA_CLIENT_ID,
        client_secret: process.env.OKTA_CLIENT_SECRET,
        issuer: `${ process.env.OKTA_ORG_URL }/oauth2/default`,
        redirect_uri: `${ process.env.HOST_URL }/authorization-code/callback`,
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
