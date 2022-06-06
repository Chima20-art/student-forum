import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';
import { Button } from '@mui/material';
import Image from 'next/image';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

export default function Login() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'red' }}>
      <Paper
        sx={{
          minWidth: { md: '85%', xs: '98%' },
          minHeight: { md: '80vh' },
          margin: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifySelf: 'center',
        }}
      >
        <Grid container>
          <Grid item md={6} xs={6} sx={{ backgroundColor: 'green' }}></Grid>
          <Grid
            container
            direction="column"
            item
            md={6}
            xs={6}
            sx={{ backgroundColor: 'yellow' }}
            justifyContent="space-around"
            textAlign="center"
          >
            <Typography item> The student club</Typography>

            <Typography item sx={{ fontWeight: 700, fontSize: '28px' }}>
              {' '}
              Join now in 30 seconds
            </Typography>
            <Grid item container>
              <Grid
                md={6}
                item
                container
                direction="column"
                sx={{ backgroundColor: 'red' }}
              >
                <Grid
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F0F9FC',
                    width: '80px',
                    height: '80px',
                    borderRadius: '40px',
                    margin: 'auto',
                  }}
                >
                  <SmsIcon color="primary" />
                </Grid>
                <Typography> 240,000+</Typography>
                <Typography>posts on a month</Typography>
              </Grid>
              <Grid
                md={6}
                item
                container
                direction="column"
                sx={{ backgroundColor: 'blue' }}
              >
                <Grid
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F0F9FC',
                    width: '80px',
                    height: '80px',
                    borderRadius: '40px',
                    margin: 'auto',
                  }}
                >
                  <PeopleAltIcon
                    color="primary"
                    sx={{ width: '26px', height: '26px' }}
                  />
                </Grid>

                <Typography>10 million</Typography>
                <Typography>student online</Typography>
              </Grid>
            </Grid>
            <Grid container item justifyContent="center">
              <Button
                onClick={() => signIn('google')}
                variant="contained"
                size="small"
                sx={{
                  width: '35%',
                  color: '#1A76D2',
                  backgroundColor: 'white',
                  '&:hover': { backgroundColor: '#fff' },
                }}
              >
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                    borderRadius: '2px',
                    fontSize: '10px',
                  }}
                  width={40}
                  height={40}
                >
                  <Image
                    src="/GoogleLogo.svg"
                    alt="google"
                    width={15}
                    height={15}
                  />
                </Box>
                <Box fontSize={12}>sign in with google</Box>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
