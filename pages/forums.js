import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Box } from '@mui/system';
import { useSession } from 'next-auth/react';
import { Grid, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Paper from '@mui/material/Paper';
import Discussions from '../components/discussions';
import AddDiscussion from '../components/addDiscussion';
import Link from 'next/link';
export default function Forums() {
  const { data: session, status } = useSession();
  const popularTopics = [
    { icon: 'AccountBalanceIcon', name: 'Movies' },
    { icon: 'AccountBalanceIcon', name: 'University' },
    { icon: 'AccountBalanceIcon', name: 'Study Help' },
    { icon: 'AccountBalanceIcon', name: 'Music' },
    { icon: 'AccountBalanceIcon', name: 'Gaming' },
    { icon: 'AccountBalanceIcon', name: 'Jobs' },
    { icon: 'AccountBalanceIcon', name: 'Money' },
    { icon: 'AccountBalanceIcon', name: 'Careers' },
    { icon: 'AccountBalanceIcon', name: 'Sports & Health' },
    { icon: 'AccountBalanceIcon', name: 'Hobbies' },
    { icon: 'AccountBalanceIcon', name: 'Pop Culture' },
    { icon: 'AccountBalanceIcon', name: 'Fashion & beauty' },
  ];

  return (
    <Box>
      <ResponsiveAppBar status={status} />
      <Grid
        sx={{
          maxWidth: { md: '85%', xs: '98%' },
          margin: 'auto',
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
          Student Edge Youth Forums
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
              {popularTopics.map((topic) => (
                <Grid
                  container
                  item
                  xs={6}
                  md={3}
                  key={topic.name}
                  margin="10px 0px"
                  alignItems="center"
                >
                  <Link href={'/forums/' + topic.name} key={topic.name}>
                    <a
                      style={{
                        display: 'flex',
                        color: 'black',
                      }}
                    >
                      <AccountBalanceIcon />
                      <Typography
                        component="p"
                        marginLeft="7px"
                        sx={{
                          fontFamily: 'monospace',
                          fontWeight: 400,
                          fontSize: { xs: '15px', md: '18px' },
                        }}
                      >
                        {topic.name}
                      </Typography>
                    </a>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Discussions />
      <AddDiscussion />
    </Box>
  );
}
