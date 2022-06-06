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
  addPostLike,
  createCategory,
  createComment,
  createPost,
  getAllPosts,
  getPost,
  getPostsByCategory,
} from '../utils/backendAPI';
import LoginComponent from '../components/loginComponent';

export default function Home() {
  const { data: session, status } = useSession();

  //createPost();

  // Hi chaima check this to be able to use https://next-auth.js.org/tutorials/securing-pages-and-api-routes

  useEffect(() => {
    async function fetchData() {
      /* const data = await getAllPosts();
      console.log('data ', data);
      const comment = await createComment('tao', 'wrong');
      console.log('comment', comment);
      const post = await createPost(
        'Sami',
        'it s a post',
        'aad1b4cb8e53bf7c4eeeac9b55d7b93f'
      );
      console.log('post', post);
      const like = await addPostLike(
        'chaimae',
        '01f658ffe003d88297eb11d99cb6f908'
      );
      console.log('like added to the post with id:', like);*/
      const postsBycategory = await getPostsByCategory(
        'aad1b4cb8e53bf7c4eeeac9b55d7b93f',
        0
      );
      console.log('postsBycategory :', postsBycategory);
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
