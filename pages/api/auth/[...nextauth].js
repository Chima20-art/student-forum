import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { FirebaseAdapter } from '../../../utils/firebaseAdapter';

import { db } from '../../../firebase.config';
import * as firebaseFunctions from 'firebase/firestore';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirebaseAdapter({
    db,
    ...firebaseFunctions,
  }),
  secret: process.env.JWT_SECRET,
});
