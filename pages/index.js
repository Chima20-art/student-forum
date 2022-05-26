import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { useSession, signIn, signOut } from 'next-auth/react';
import LoginPage from '../components/loginPage';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function Home() {
  const { data: session, status } = useSession(); // Hi chaima check this to be able to use https://next-auth.js.org/tutorials/securing-pages-and-api-routes

  if (status == 'loading') {
    return (
      <div className={styles.container}>
        <h1>loading..</h1>
      </div>
    );
  }

  if (status == 'unauthenticated') {
    //not logged in
    return (
      <div className={styles.container}>
        <LoginPage />
        <button onClick={() => signIn('google')}>login with google</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>nextjs with next-auth v4</h1>
      <br />

      {status == 'unauthenticated' ? (
        <button onClick={() => signIn('google')}>login with google</button>
      ) : (
        <button onClick={signOut}>logout</button>
      )}

      <br />
      <br />

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
