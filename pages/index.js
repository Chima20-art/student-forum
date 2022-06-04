import Head from 'next/head';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';

import { useSession, signIn, signOut } from 'next-auth/react';
import LoginPage from '../components/loginPage';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  addCommentLike,
  addPostComment,
  createComment,
  createPost,
} from '../utils/backendAPI';

export default function Home() {
  const { data: session, status } = useSession();
  // Hi chaima check this to be able to use https://next-auth.js.org/tutorials/securing-pages-and-api-routes

  if (status == 'loading') {
    return (
      <div>
        <h1>loading..</h1>
      </div>
    );
  }
  createPost('n', 'e', 'r');
  createComment('chaima', "it's your first step");
  addPostComment(
    '0eea10d9fa62ddcc8b2d604039154467',
    '000c3f1d683700653912c104b310ce7b'
  );

  return (
    <Box>
      <ResponsiveAppBar status={status} />
      <Container maxWidth="xl">
        <LoginPage />
      </Container>
    </Box>
  );
}
