import Head from 'next/head';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import LoginPage from '../components/loginPage';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginComponent from '../components/loginComponent';
import { getUsersByIds } from '../utils/backendAPI';

export default function Home() {
  const { data: session, status } = useSession();
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  //createPost();

  // Hi chaima check this to be able to use https://next-auth.js.org/tutorials/securing-pages-and-api-routes

  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, []);

  if (status == 'loading') {
    return (
      <div>
        <h1>loading..</h1>
      </div>
    );
  }

  if (status == 'authenticated') {
    router.push('/forums');
  }

  return (
    <Box>
      <ResponsiveAppBar status={status} setCurrentPage={setCurrentPage} />

      <LoginPage currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Box>
  );
}
