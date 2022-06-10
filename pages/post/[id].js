import React, { useState } from 'react';
import { Grid, Typography, Container } from '@mui/material';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Link from 'next/link';
import { getPost } from '../../utils/backendAPI';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Post({ post }) {
  const router = useRouter();

  if (!post && typeof window != 'undefined') {
    router.push('/');
  }

  const { postedBy, content, category, title, likes, id, createdAt, comments } =
    post ?? {};

  return (
    <Grid
      container
      direction="column"
      sx={{
        width: '100vw',
        height: '100vh',
        margin: '0px',
        padding: '64px 0px',
      }}
    >
      <ResponsiveAppBar setCurrentPage={null} />
      <Container maxWidth="xl" sx={{ padding: '24px 0px' }}>
        <Grid
          container
          sx={
            {
              //backgroundColor: 'red',
            }
          }
        >
          <Grid
            item
            xs={12}
            sx={{
              //maxWidth: { md: '85%', xs: '98%' },
              //backgroundColor: 'red',
              display: 'flex',
              alignItems: 'center',
            }}
            maxWidth="xl"
          >
            <Link href="/forums" key="forums">
              <Typography
                sx={{
                  margin: '12px 0px',
                  color: '#1A76D2',
                  borderBottom: 'dashed',
                  width: 'fit-content',
                  cursor: 'pointer',
                  textAlign: 'left',
                  marginRight: '8px',
                }}
              >
                Back to All Discussions
              </Typography>
            </Link>
            >>
            <Link href={'/forums/' + category?.id} key="forums">
              <Typography
                sx={{
                  margin: '12px 0px',
                  color: '#1A76D2',
                  borderBottom: 'dashed',
                  width: 'fit-content',
                  cursor: 'pointer',
                  textAlign: 'left',
                  marginLeft: '8px',
                }}
              >
                {category?.name}
              </Typography>
            </Link>
          </Grid>
          <Grid
            container
            item
            sx={{
              padding: '0px',
              margin: '0px',
              display: 'flex',
              alignItems: 'center',
              //backgroundColor: 'orange',
              width: '100%',
            }}
          >
            <Grid item xs={10} sx={{}}>
              <Typography
                variant="h1"
                color="primary"
                sx={{
                  fontSize: 36,
                  fontWeight: 800,
                }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{}}>
              <FacebookRoundedIcon
                color="primary"
                sx={{ margin: '0px 12px' }}
              />
              <TwitterIcon color="primary" sx={{ margin: '0px 12px' }} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query ?? {};
  let post = null;
  if (id) {
    const postResponse = await getPost(id);
    if (postResponse?.id) {
      post = postResponse;
    }
  }

  //console.log('post ', post);

  //console.log('allCategories ', allCategories);
  //console.log('allPosts ', allPosts);

  return {
    props: { post }, // will be passed to the page component as props
  };
}
