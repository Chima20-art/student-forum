import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useAuth } from '../context/auth';

export default function Home() {
  const { user, loginWithGoogle, logout } = useAuth();

  return (
    <div className={styles.container}>
      <h1>example for auth</h1>
      {!user && <button onClick={loginWithGoogle}>login with google</button>}
      {user && <button onClick={logout}>logout</button>}
      <br />
      <br />

      <Link href="/profile">
        <a>go to profile</a>
      </Link>

      <br />
    </div>
  );
}
