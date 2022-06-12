import { useRouter } from 'next/router';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState, useEffect } from 'react';
import Discussion from '../../components/discussion';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import AddDiscussion from '../../components/addDiscussion';
import Loading from '../../components/loading';

import { getPostsByCategory, getCategory } from '../../utils/backendAPI';
import Discussions from '../../components/discussions';

const CategoryPage = ({}) => {
  const classes = useStyles;
  const router = useRouter();
  const { category } = router.query;
  const { data: session, status } = useSession();

  const [posts, setPosts] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      //console.log('id is ', id);
      if (category) {
        let promises = [getPostsByCategory(category, 0), getCategory(category)];
        promises = await Promise.all(promises);
        const postsResponse = promises[0];

        setCategoryData(promises[1]);

        //console.log('postResponse ', postResponse);
        if (Array.isArray(postsResponse) && postsResponse?.length > 0) {
          setPosts(postsResponse);
        }
      }

      setLoading(false);
    }
    fetchData();
  }, []);

  if (status == 'loading' || loading) {
    return <Loading />;
  }

  if (status == 'unauthenticated') {
    router.push('/login');
  }

  return (
    <Grid
      sx={{
        maxWidth: { md: '85%', xs: '98%' },
        margin: '69px auto 20px 69px',
      }}
    >
      <ResponsiveAppBar setCurrentPage={null} />
      <Grid
        container
        sx={{
          marginTop: { md: '20px', xs: '10px' },
          width: { xs: '95%', md: '85%' },
          margin: 'auto',

          flexDirection: 'column',
        }}
      >
        <Link href="/forums" className={classes.link}>
          <Typography
            sx={{
              margin: '12px 0px',
              color: '#1A76D2',
              borderBottom: 'dashed',
              width: 'fit-content',
              cursor: 'pointer',
            }}
          >
            Back to All Discussions
          </Typography>
        </Link>
        {categoryData?.name && (
          <Typography
            sx={{
              margin: '12px 0px',
              color: '#1A76D2',
              fontSize: '35px',
            }}
          >
            {categoryData?.name} Forums
          </Typography>
        )}
        {categoryData?.description && (
          <Typography
            sx={{
              margin: '12px 0px',
              fontWeight: 'normal',
            }}
            variant="h6"
          >
            {categoryData?.description}
          </Typography>
        )}

        <Grid
          item
          key="category button"
          container
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        ></Grid>
        <Discussions posts={posts} />
        <AddDiscussion />
      </Grid>
    </Grid>
  );
};

export default CategoryPage;

const useStyles = makeStyles((theme) => ({
  link: {
    padding: '60px',
    color: 'red',
  },
}));
