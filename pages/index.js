import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";

function Home() {
  const AuthUser = useAuthUser();

  return (
    <div className={styles.container}>
      <p>Your email is {AuthUser.email ? AuthUser.email : "unknown"}.</p>
    </div>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Home);
