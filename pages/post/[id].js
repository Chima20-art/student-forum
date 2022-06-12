import React, { useState } from 'react';
import { Grid, Typography, Container, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Link from 'next/link';
import { getPost } from '../../utils/backendAPI';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import timeSince from '../../utils/timeSince';

export default function Post({ post }) {
  const router = useRouter();
  const { data: session, status } = useSession();

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
            <Grid
              item
              xs={10}
              sx={
                {
                  //backgroundColor: 'red',
                }
              }
            >
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
            <Grid
              item
              xs={2}
              sx={{
                //backgroundColor: 'red',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <div style={{ margin: '8px 12px' }}>
                <FacebookShareButton
                  url={process.env.NEXT_PUBLIC_NEXTAUTH_URL + '/post/' + id}
                  quote={title}
                  windowHeight="100%"
                >
                  <FacebookIcon size={36} round />
                </FacebookShareButton>
              </div>
              <div style={{ margin: '8px 12px' }}>
                <TwitterShareButton
                  url={process.env.NEXT_PUBLIC_NEXTAUTH_URL + '/post/' + id}
                  title={title}
                >
                  <TwitterIcon size={36} round />
                </TwitterShareButton>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              //backgroundColor: 'red',
              padding: '24px',
              marginTop: '24px',
            }}
            component={Paper}
            elevation={6}
          >
            <Grid container item xs={12} sx={{ alignItems: 'center' }}>
              <AccessTimeIcon fontSize="small" sx={{ marginRight: '4px' }} />
              <Typography fontSize="12px">
                Started on {new Date(createdAt).toLocaleString()}
              </Typography>
            </Grid>
            <Grid container item xs={12} sx={{ alignItems: 'center' }}>
              <Grid
                item
                xs={2}
                sx={{ backgroundColor: 'red', padding: '1rem' }}
              >
                <p>logo</p>
              </Grid>
              <Grid
                item
                xs={10}
                sx={{
                  backgroundColor: '#fafafa',
                  border: '1px solid #f5f5f5',
                  padding: '1rem',
                }}
              >
                <Typography>{content}</Typography>
              </Grid>
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
