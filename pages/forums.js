import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Box } from '@mui/system';
import { useSession } from 'next-auth/react';
import { Grid, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Paper from '@mui/material/Paper';
import Discussions from '../components/discussions';
import AddDiscussion from '../components/addDiscussion';
import Link from 'next/link';
import { TextField } from '@mui/material';
import { useRouter } from 'next/router';
import Loading from '../components/loading';
import { getAllCategories, getAllPosts } from '../utils/backendAPI';
import Icon from '@mui/material/Icon';
import { useState, useEffect } from 'react';

export default function Forums({}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const promises = [getAllCategories(), getAllPosts(0)];
      const results = await Promise.all(promises);
      let allCategoriesResponse = results[0];
      let allPostsResponse = results[1];

      if (allPostsResponse) {
        allPostsResponse = allPostsResponse.sort((a, b) => {
          return a?.createdAt <= b?.createdAt ? 1 : -1;
        });

        setAllPosts(allPostsResponse);
      }
      setAllCategories(allCategoriesResponse);

      setLoading(false);
    }
    fetchData();
  }, []);

  if (status == 'unauthenticated') {
    router.push('/login');
  }

  if (status == 'loading' || loading) {
    return <Loading />;
  }

  return (
    <Box>
      <ResponsiveAppBar setCurrentPage={null} />
      <Grid
        sx={{
          maxWidth: { md: '85%', xs: '98%' },
          margin: '69px auto 20px 69px',
        }}
      >
        <Typography
          sx={{
            color: '#2668F0',
            fontStyle: 'bold',
            fontSize: { xs: '30px', md: '40px' },
            fontWeight: 700,
            letterSpacing: '0.4px',
            lineHeight: { md: '1.5em', xs: '0.8' },
            fontFamily: 'Londrina Solid',
            margin: '25px 0px',
          }}
        >
          The digital university student forums
        </Typography>
        <Paper elevation={2}>
          <Grid
            sx={{
              padding: '30px',
            }}
          >
            <Typography
              borderBottom="1px solid #DCDCDC"
              sx={{
                fontFamily: 'Raleway',
                fontWeight: 700,
                fontSize: { xs: '18px', md: '20px' },
                paddingBottom: '10px',
              }}
            >
              Popular Topics
            </Typography>

            <Grid
              container
              sx={{
                display: 'flex',
              }}
              paddingTop="15px"
            >
              {' '}
              {allCategories.map((category) => (
                <Grid
                  container
                  item
                  xs={6}
                  md={3}
                  key={category.name}
                  margin="10px 0px"
                  alignItems="center"
                >
                  <Link href={'/forums/' + category.id}>
                    <a
                      style={{
                        display: 'flex',
                        color: 'black',
                        alignItems: 'center',
                      }}
                    >
                      <Icon sx={{ fontSize: 30 }} color="primary">
                        {category.iconName ?? 'home'}
                      </Icon>

                      <Typography
                        component="p"
                        marginLeft="7px"
                        sx={{
                          fontFamily: 'monospace',
                          fontWeight: 400,
                          fontSize: { xs: '15px', md: '18px' },
                        }}
                      >
                        {category.name}
                      </Typography>
                    </a>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
        <Discussions posts={allPosts} />
        <AddDiscussion />
      </Grid>
    </Box>
  );
}
