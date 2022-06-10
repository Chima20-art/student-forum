import React, { useState } from 'react';
import { Grid, Typography, Container, Paper, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Link from 'next/link';
import { getPost } from '../../utils/backendAPI';
import Button from '@mui/material/Button';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import timeSince from '../../utils/timeSince';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Post({ post }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (!post && typeof window != 'undefined') {
    router.push('/');
  }

  const {
    email: userEmail,
    image: userImage,
    name: userName,
  } = session?.user ?? {};

  const {
    postedBy,
    content,
    category,
    title,
    likes,
    id,
    createdAt,
    comments,
    commentUsers,
  } = post ?? {};

  console.log('commentUsers', commentUsers);

  const likedPost = likes?.includes(userEmail);

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
            <Grid
              container
              item
              xs={12}
              sx={{
                alignItems: 'flex-start',
                marginTop: '24px',
              }}
            >
              <Grid
                item
                xs={2}
                sx={{
                  //backgroundColor: 'red',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  width="80px"
                  height="80px"
                  src={postedBy?.image}
                  style={{
                    borderRadius: 50,
                    width: '80px',
                    height: '80px',
                  }}
                />
                <Link href={'/user/' + postedBy?.email}>
                  <a style={{}}>
                    <Typography sx={{ margin: '8px 0px' }}>
                      {postedBy?.name}
                    </Typography>
                  </a>
                </Link>
              </Grid>
              <Grid
                item
                xs={10}
                sx={{
                  backgroundColor: '#fafafa',
                  border: '1px solid #f5f5f5',
                  padding: '1rem',
                  height: '100%',
                }}
              >
                <Typography sx={{ fontSize: '1.6rem', color: 'gray' }}>
                  {content}
                  {content}
                  {content}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sx={{
                alignItems: 'center',
                marginTop: '24px',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Grid
                item
                sx={{
                  //backgroundColor: 'red',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  //backgroundColor: 'orange',
                }}
              >
                {!likedPost && (
                  <IconButton color="primary">
                    <FavoriteBorderIcon color="primary" fontSize="large" />
                  </IconButton>
                )}
                {likedPost && (
                  <IconButton color="primary">
                    <FavoriteIcon color="primary" fontSize="large" />
                  </IconButton>
                )}
              </Grid>
              <Grid
                item
                sx={{
                  //backgroundColor: 'red',

                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'orange',

                  marginLeft: '24px',
                }}
              >
                <Button variant="contained" startIcon={<MapsUgcIcon />}>
                  Reply
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sx={{
                alignItems: 'center',
                marginTop: '24px',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Grid item xs={12}>
                <Typography variant="h5">Comments</Typography>
              </Grid>
              {comments?.map((comment) => {
                return (
                  <Grid item container xs={12}>
                    <Grid item xs={1} sx={{ backgroundColor: 'red' }}>
                      <p>asdasd</p>
                    </Grid>
                    <Grid item xs={11}></Grid>
                  </Grid>
                );
              })}
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
