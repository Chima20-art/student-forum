import Head from 'next/head';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';

import { useSession, signIn, signOut } from 'next-auth/react';
import LoginPage from '../components/loginPage';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  addCommentLike,
  addPostComment,
  createComment,
  createPost,
  getAllPosts,
} from '../utils/backendAPI';

export default function Home() {
  const { data: session, status } = useSession();

  createPost();

  // Hi chaima check this to be able to use https://next-auth.js.org/tutorials/securing-pages-and-api-routes

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPosts();
      console.log('data ', data);
      const comment = await createComment('tao', 'wrong');
      console.log('comment', comment);
      const post = await createPost('chaimae', 'it s a post', 'life');
      console.log('post', post);
    }
    fetchData();
  }, []);

  if (status == 'loading') {
    return (
      <div>
        <h1>loading..</h1>
      </div>
    );
  }

  return (
    <Box>
      <ResponsiveAppBar status={status} />
      <Container maxWidth="xl">
        <LoginPage />
      </Container>
    </Box>
  );
}
