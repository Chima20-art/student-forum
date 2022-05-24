import { init } from "next-firebase-auth";
import absoluteUrl from "next-absolute-url";

const initAuth = () => {
  init({
    debug: true,
    authPageURL: ({ ctx }) => {
      const isServerSide = typeof window === "undefined";
      const origin = isServerSide
        ? absoluteUrl(ctx.req).origin
        : window.location.origin;
      const destPath =
        typeof window === "undefined" ? ctx.resolvedUrl : window.location.href;
      const destURL = new URL(destPath, origin);
      return `auth-ssr?destination=${encodeURIComponent(destURL)}`;
    },

    appPageURL: ({ ctx }) => {
      const isServerSide = typeof window === "undefined";
      const origin = isServerSide
        ? absoluteUrl(ctx.req).origin
        : window.location.origin;
      const params = isServerSide
        ? new URL(ctx.req.url, origin).searchParams
        : new URLSearchParams(window.location.search);
      const destinationParamVal = params.get("destination")
        ? decodeURIComponent(params.get("destination"))
        : undefined;

      // By default, go to the index page if the destination URL
      // is invalid or unspecified.
      let destURL = "/";
      if (destinationParamVal) {
        // Verify the redirect URL host is allowed.
        // https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/11-Client_Side_Testing/04-Testing_for_Client_Side_URL_Redirect
        const allowedHosts = ["localhost:3000", "nfa-example.vercel.app"];
        const allowed =
          allowedHosts.indexOf(new URL(destinationParamVal).host) > -1;
        if (allowed) {
          destURL = destinationParamVal;
        } else {
          // eslint-disable-next-line no-console
          console.warn(
            `Redirect destination host must be one of ${allowedHosts.join(
              ", "
            )}.`
          );
        }
      }
      return destURL;
    },
    loginAPIEndpoint: "/api/login", // required
    logoutAPIEndpoint: "/api/logout", // required
    onLoginRequestError: (err) => {
      console.error(err);
    },
    onLogoutRequestError: (err) => {
      console.error(err);
    },
    //firebaseAuthEmulatorHost: "localhost:9099",
    firebaseAdminInitConfig: {
      credential: {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
          : undefined,
      },
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    },
    // Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
    //useFirebaseAdminDefaultCredential: true,

    firebaseClientInitConfig: {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, // required
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    },
    cookies: {
      name: "student-forum", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: false, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;
