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
import { makeStyles } from '@mui/styles';

export default function WelcomeComponent({ small = false }) {
  const classes = useStyles();
  return (
    <Grid
      container
      sx={{
        marginTop: '20px',
        display: 'flex',
        backgroundColor: '#F1E9FD',
        flexDirection: 'column',
        alignItems: 'center',

        height: '100vh',
      }}
    >
      <Paper
        item
        elevation={6}
        sx={{
          width: { md: '95vw', xs: '98%' },
          display: 'flex',
          margin: 'auto',
        }}
      >
        <Grid container>
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
              sx={{
                fontWeight: 700,
                fontSize: '28px',
                marginBottom: '15px',
                color: '#666664',
              }}
            >
              {' '}
              What is the Student Forum?
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
              change. The student forum is a platform that works as a
              coordinator to help worldwide students share their interests,
              create series of community forums, expand skills, facilitate
              active solidarity... it has forums covering almost every area you
              could think about. Whether you love sports, the theater, music,
              entrepreneurship, community, debating, or even partial to casual
              wine tasting, there truly is something for everyone.
            </Typography>

            <Typography
              item
              md={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                sx={{
                  padding: '1em 1.3em',
                  lineHeight: '1.7em!important',
                  backgroundColor: '#AD236D',
                  color: '#ffffff!important',
                  borderWidth: '12px!important',
                  borderColor: '#AD236D',
                  borderRadius: '50px',
                  letterSpacing: '2px',
                  fontSize: '14px',
                  fontWeight: '900!important',
                  '&:hover': { backgroundColor: '#AD236D' },
                }}
              >
                Check out our forums
              </Button>
            </Typography>
          </Grid>
          <Grid
            container
            item
            md={6}
            xs={6}
            sx={{ borderLeft: 'solid 1px #DCDCDC', justifyContent: 'center' }}
          >
            <Grid
              container
              item
              direction="column"
              sx={{
                justifyContent: 'center',

                textAlign: 'center',
              }}
            >
              <Image
                src="/U(3).svg"
                alt="purple"
                height="600px"
                width="500px"
                className={classes.rotate}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
const useStyles = makeStyles((theme) => ({
  rotate: {
    transform: 'rotate(270deg)',
  },
}));
