import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';
import SelectVariants from '../components/SelectVariants';
import { TextareaAutosize } from '@mui/base';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSession, signIn, signOut } from 'next-auth/react';
import Loading from '../components/loading';
import { useRouter } from 'next/router';
import { getAllCategories, createPost } from '../utils/backendAPI';

export default function CreateDiscussion({ allCategories }) {
  const [category, setCategory] = useState('');
  const [errorCategory, setErrorCategory] = useState(false);
  const [title, setTitle] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [content, setContent] = useState('');
  const [errorContent, setErrorContent] = useState(false);
  const [submittedPost, setSubmittedPost] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createdPost, setCreatePost] = useState(null);
  const router = useRouter();

  const { data: session, status } = useSession();

  if (status == 'loading') {
    return <Loading />;
  }
  if (status == 'unauthenticated') {
    router.push('/login');
  }

  const {
    email: userEmail,
    image: userImage,
    name: userName,
  } = session?.user ?? {};

  const onSubmit = async () => {
    console.log('onSubmit');
    console.log('title ', title);
    console.log('content ', content);
    console.log('category ', category);
    console.log('userEmail ', userEmail);
    const titleError = !title || title == '';
    const categoryError = !category || category == '';
    const contentError = !content || content == '';
    if (titleError) {
      setErrorTitle(true);
    } else {
      setErrorTitle(false);
    }
    if (categoryError) {
      setErrorCategory(true);
    } else {
      setErrorCategory(false);
    }
    if (contentError) {
      setErrorContent(true);
    } else {
      setErrorContent(false);
    }

    if (
      !titleError &&
      !categoryError &&
      !contentError &&
      userEmail &&
      userEmail != ''
    ) {
      setLoading(true);
      try {
        const post = await createPost(userEmail, title, content, category);
        setCreatePost(post);
      } catch (error) {
        setCreatePost(null);
      }
      setSubmittedPost(true);
      setLoading(false);
    }
  };

  return (
    <Grid sx={{ padding: '64px 0px' }}>
      <ResponsiveAppBar setCurrentPage={null} />
      <Grid
        sx={{
          maxWidth: { md: '85%', xs: '98%' },
          margin: ' 20px auto',
        }}
      >
        <Link href="/forums">
          <Typography
            sx={{
              margin: '12px 0px',
              color: '#1A76D2',
              borderBottom: 'dashed',
              width: 'fit-content',
              cursor: 'pointer',
            }}
            component="a"
          >
            Back to All Discussions
          </Typography>
        </Link>
        <Typography
          sx={{
            margin: '12px 0px',
            color: '#1A76D2',
            fontSize: '35px',
          }}
        >
          Start a New Discussion Thread
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: '30px',
            paddingTop: '60px',
            paddingBottom: { sx: '10px', md: '1px' },
          }}
        >
          {!loading && !submittedPost && (
            <>
              <Grid
                sx={{
                  borderBottom: '1px solid #DCDCDC',
                  paddingBottom: '60px',
                }}
              >
                <TextField
                  error={errorTitle}
                  required
                  id="standard-required"
                  placeholder="Quick summary of what you want to talk about"
                  label="Discussion title"
                  variant="standard"
                  inputProps={{ maxLength: 140, minLength: 5 }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  helperText="Please enter a title (140 characters)"
                  sx={{
                    display: 'flex',
                    width: '70%',
                    textAlign: 'center',
                    margin: 'auto',
                  }}
                />
                <SelectVariants
                  categories={allCategories}
                  category={category}
                  setCategory={setCategory}
                  error={errorCategory}
                />
              </Grid>
              <Grid
                sx={{
                  width: '70%',
                  paddingTop: '60px',
                  justifyContent: 'flex-center',
                  textAlign: 'flex-start',
                  margin: 'auto',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '.8em',
                    fontWeight: '600',
                    color: '#263844 ',
                  }}
                >
                  Discussion Background
                </Typography>
                <Typography sx={{ fontSize: '.725em', color: '#263344' }}>
                  Give some detail about your discussion to encourage other
                  members to respond, add #tags to help users find your thread.
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  width: '70%',
                  paddingTop: '40px',
                  justifyContent: 'flex-center',
                  textAlign: 'flex-start',

                  margin: 'auto',
                }}
              >
                <TextField
                  error={errorContent}
                  md={12}
                  id="outlined-basic"
                  label="More Detail to give context to other readers"
                  fullWidth
                  multiline
                  required
                  rows={7}
                  placeholder="More Detail to give context to other readers"
                  variant="outlined"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  sx={{ backgroundColor: '#F5F5F5' }}
                />
              </Grid>
              <Typography
                sx={{
                  width: '70%',
                  margin: 'auto',
                  padding: '60px 0px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  color: '#F5F5F5',
                }}
              >
                <Link href="/createDiscussion">
                  <Button
                    sx={{
                      color: 'white',
                      backgroundColor: '#2668F1',
                      padding: '15px',
                      borderRadius: '25px',
                      '&:hover': { backgroundColor: '#2668F9' },
                    }}
                    onClick={onSubmit}
                  >
                    create a thread{''}
                  </Button>
                </Link>
              </Typography>
            </>
          )}

          {loading && !submittedPost && <Loading small />}

          {!loading && submittedPost && createdPost && (
            <Grid
              sx={{
                borderBottom: '1px solid #DCDCDC',
                paddingBottom: '60px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.8em',
                  fontWeight: '800',
                  color: '#263844 ',
                  textAlign: 'center',
                }}
              >
                Post Submitted ✅
              </Typography>

              {createdPost?.id && (
                <Typography sx={{ textAlign: 'center', marginTop: '12px' }}>
                  <Link href={'/post/' + createdPost.id}>
                    <a>View Post</a>
                  </Link>
                </Typography>
              )}
            </Grid>
          )}

          {!loading && submittedPost && !createdPost && (
            <Grid
              sx={{
                borderBottom: '1px solid #DCDCDC',
                paddingBottom: '60px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.8em',
                  fontWeight: '800',
                  color: '#263844 ',
                  textAlign: 'center',
                }}
              >
                There Was an error trying to create a Post ❌
              </Typography>

              <Typography sx={{ textAlign: 'center', marginTop: '12px' }}>
                <Link href={'/forums'}>
                  <a>Go back to forums</a>
                </Link>
              </Typography>
            </Grid>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const promises = [getAllCategories()];
  const results = await Promise.all(promises);
  let allCategories = results[0];

  //console.log('allCategories ', allCategories);
  //console.log('allPosts ', allPosts);

  return {
    props: {
      allCategories,
    }, // will be passed to the page component as props
  };
}
