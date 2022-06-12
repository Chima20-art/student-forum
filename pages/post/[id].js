import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Container,
  Paper,
  IconButton,
  Divider,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import Link from 'next/link';
import { getPost } from '../../utils/backendAPI';
import Button from '@mui/material/Button';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
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
import { Box } from '@mui/system';

import {
  addPostComment,
  addPostLike,
  addCommentLike,
} from '../../utils/backendAPI';

export default function Post({ post }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(false);
  const [postState, setPostState] = useState(post ?? {});

  if (!post && typeof window != 'undefined') {
    //router.push('/');
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
  } = postState;

  const likedPost = likes?.includes(userEmail);

  const onPostComment = async () => {
    setLoading(true);
    if (commentText && commentText != '' && userEmail && commentText && id) {
      console.log(
        'postedBy ' + userEmail + ' content ' + commentText + ' postId ' + id
      );
      const comment = await addPostComment(userEmail, commentText, id);
      //console.log('comment ', comment);
      commentUsers.push({
        email: userEmail,
        image: userImage,
        name: userName,
      });
      comments.push({
        postedBy: userEmail,
        content: commentText,
        likes: [],
        createdAt: Date.now(),
      });
      setCommentText('');
    }
    setLoading(false);
  };

  const likePost = async () => {
    console.log('likePost');
    if (userEmail && id) {
      const likePost = await addPostLike(userEmail, id);
      console.log('likePost ', likePost);
      likes.push(userEmail);
      setPostState({
        postedBy,
        content,
        category,
        title,
        likes,
        id,
        createdAt,
        comments,
        commentUsers,
      });
    } else {
      console.log('userEmail or id is null ');
      console.log('userEmail ', userEmail);
      console.log('id ', id);
    }
  };

  const likeComment = async (id, userId) => {
    if ((id, userId)) {
      const commentLike = await addCommentLike(id, userId);
      comments = comments.map((item) => {
        if (id == item.id) {
          item.likes.push(useEffect);
        }
        return item;
      });

      setPostState({
        postedBy,
        content,
        category,
        title,
        likes,
        id,
        createdAt,
        comments,
        commentUsers,
      });
    }
  };

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
            <Link href="/forums">
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
            &gt;&gt;
            <Link href={'/forums/' + category?.id}>
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
                {postedBy?.image && (
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
                )}

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
                  <IconButton
                    color="primary"
                    onClick={() => {
                      likePost();
                    }}
                  >
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
                  <a style={{ textDecoration: 'none' }} href="#inputComment">
                    Reply
                  </a>
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
                let commentUser = commentUsers.filter(
                  (item) => item.email == comment.postedBy
                );

                commentUser = commentUser?.length > 0 ? commentUser[0] : {};

                return (
                  <div key={comment.id} style={{ width: '100%' }}>
                    <Grid item container xs={12} sx={{ margin: '12px 0px' }}>
                      <Grid
                        item
                        xs={1}
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        {commentUser?.image && (
                          <Image
                            width="50px"
                            height="50px"
                            src={commentUser?.image}
                            style={{
                              borderRadius: 25,
                              width: '50px',
                              height: '50px',
                            }}
                          />
                        )}

                        <Link href={'/user/' + commentUser?.email}>
                          <a style={{}}>
                            <Typography sx={{ margin: '8px 0px' }}>
                              {commentUser?.name}
                            </Typography>
                          </a>
                        </Link>
                      </Grid>
                      <Grid item container xs={11}>
                        <Grid item xs={12}>
                          <Typography sx={{ padding: '8px' }}>
                            {comment.content}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {!comment?.likes?.includes(userEmail) ? (
                            <IconButton
                              color="primary"
                              onClick={() => {
                                likeComment(comment.id, commentUser);
                              }}
                            >
                              <FavoriteBorderIcon
                                color="primary"
                                fontSize="small"
                              />
                            </IconButton>
                          ) : (
                            <IconButton color="primary">
                              <FavoriteIcon color="primary" fontSize="small" />
                            </IconButton>
                          )}
                          <Typography>{comment?.likes?.length}</Typography>
                          <FiberManualRecordIcon
                            sx={{
                              fontSize: '8px',
                              marginLeft: '6px',
                              marginRight: '6px',
                              marginTop: '4px',
                              color: '#333',
                              opacity: 0.6,
                            }}
                          />
                          <AccessTimeIcon
                            fontSize="small"
                            sx={{ color: '#333', opacity: 0.6 }}
                          />
                          <Typography
                            sx={{
                              color: '#333',
                              opacity: 0.6,
                              marginLeft: '6px',
                              marginRight: '6px',
                            }}
                          >
                            about {timeSince(comment.createdAt)}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider orientation="horizontal" sx={{ width: '100%' }} />
                  </div>
                );
              })}
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
                padding: '16px',
                backgroundColor: '#fafafa',
              }}
            >
              <Grid
                item
                container
                xs={12}
                sx={{
                  display: 'flex',
                }}
              >
                <Typography variant="h5">Post a Comment</Typography>
                <Box
                  sx={{
                    margin: '36px',
                    width: '100%',
                  }}
                >
                  <TextField
                    fullWidth
                    id="inputComment"
                    label="Write a response"
                    variant="outlined"
                    multiline
                    minRows={5}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                </Box>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '0px 36px ',
                  }}
                >
                  <LoadingButton
                    onClick={() => {
                      onPostComment();
                    }}
                    loading={loading}
                    sx={{}}
                    variant="contained"
                  >
                    Post
                  </LoadingButton>
                </Grid>
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

  console.log('id is ', id);
  if (id) {
    const postResponse = await getPost(id);

    console.log('postResponse ', postResponse);
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
