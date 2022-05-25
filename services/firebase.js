import { initializeApp, getApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, // Auth / General Use
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID, // General Use
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, // General Use
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, // Auth with popup/redirect
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL, // Realtime Database
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, // Storage
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, // Cloud Messaging
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID, // Analytics
};

let app;

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

export default app;
