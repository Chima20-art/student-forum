import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';
import { Button } from '@mui/material';
import Image from 'next/image';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PageContain from '../components/react-scroller';
import React, { useState } from 'react';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Login() {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  return (
    <Grid
      container
      direction="column"
      sx={{
        maxWidth: { md: '85%', xs: '98%' },
        height: '100vh',
        margin: 'auto',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxHeight: { md: '80vh' },
          margin: ' 0px',
          display: 'flex',
          flexDirection: 'row',
          justifySelf: 'center',
        }}
      >
        <Grid container>
          <Grid
            container
            item
            md={6}
            xs={6}
            sx={{ backgroundColor: '#287DD5', justifyContent: 'center' }}
          >
            <Grid item sx={{}}>
              <Image
                src="/students1.svg"
                alt="purple"
                height="374px"
                width="375px"
              />
            </Grid>
            <Typography
              item
              sx={{
                textAlign: 'center',
                display: 'flex',
                color: '#fff',
                fontWeight: '700',
              }}
            >
              {' '}
              We work to connect, inspire and empower students globally through
              solidarity, democracy, representation and the practice of radical
              change. {''}
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            item
            md={6}
            xs={6}
            sx={{
              padding: '30px',
              justifyContent: 'center',
            }}
            textAlign="center"
          >
            <Typography
              item
              sx={{
                fontFamily: 'Italianno, cursive',
                fontSize: '34px',
                fontWeight: 'bold',
                color: '#666664',
                marginBottom: '50px',
              }}
            >
              {' '}
              The student forum
            </Typography>

            <Typography
              item
              sx={{
                fontWeight: 700,
                fontSize: '28px',
                marginBottom: '15px',
                color: '#874ED1',
              }}
            >
              {' '}
              Join now in 30 seconds
            </Typography>
            <Typography
              sx={{
                maxWidth: '455px',
                color: '#666664',
                margin: '0px auto ',
                justifyContent: 'center',
                marginBottom: '30px',
              }}
            >
              {' '}
              We work to connect, inspire and empower students globally through:
              solidarity, democracy, representation and the practice of radical
              change.
            </Typography>
            <Grid item container sx={{ marginBottom: '40px' }}>
              <Grid md={6} item container direction="column">
                <Grid
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 'auto',
                  }}
                >
                  <SmsIcon
                    sx={{ width: '30px', height: '36px', color: '#287DD5' }}
                  />
                </Grid>
                <Typography
                  sx={{
                    fontSize: '26px',
                    fontWeight: '700',
                  }}
                >
                  {' '}
                  240,000+
                </Typography>
                <Typography sx={{ color: '#666664' }}>
                  posts on a month
                </Typography>
              </Grid>
              <Grid md={6} item container direction="column" sx={{}}>
                <Grid
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    margin: 'auto',
                  }}
                >
                  <PeopleAltIcon
                    color="secondary"
                    sx={{ width: '46px', height: '36px', color: '#287DD5' }}
                  />
                </Grid>

                <Typography
                  sx={{
                    fontSize: '26px',
                    fontWeight: '700',
                  }}
                >
                  10 million
                </Typography>
                <Typography sx={{ color: '#505050', fontSize: '15px' }}>
                  student online
                </Typography>
              </Grid>
            </Grid>
            <Grid container item justifyContent="center">
              <Button
                onClick={() => signIn('google')}
                variant="contained"
                size="small"
                sx={{
                  width: '40%',
                  color: '#666664',
                  marginTop: '15px',
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
    </Grid>
  );
}
