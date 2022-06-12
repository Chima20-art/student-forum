import { Grid, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Loading from '../../components/loading';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import { getPostsByUser, getUsersByIds } from '../../utils/backendAPI';

const Profile = ({}) => {
  const router = useRouter();
  const { email } = router.query;
  const { data: session, status } = useSession();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      if (email) {
        let promises = [getUsersByIds([email]), getPostsByUser(email, 0)];
        promises = await Promise.all(promises);
        const userResponse = promises[0];
        const postsByUser = promises[1];

        console.log('postsByUser ', postsByUser);
        if (userResponse && userResponse?.length > 0) {
          userResponse = userResponse[0];
          setUser(userResponse);
        }
        if (postsByUser && postsByUser?.length > 0) {
          setPosts(postsByUser);
        }
      } else {
        console.log('email is not defiend');
      }
      setLoading(false);
    }
    fetchData();
  }, [email]);

  if (status == 'loading' || loading) {
    return <Loading />;
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
        <pre>{JSON.stringify(posts, null, 2)}</pre>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <Typography
          sx={{
            margin: '24px 0px',
            color: '#1A76D2',
            borderBottom: 'dashed',
            width: 'fit-content',
            //cursor: 'pointer',
            fontSize: 18,
          }}
        >
          All My Posts
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Profile;
