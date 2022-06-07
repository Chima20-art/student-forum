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
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        justifySelf: 'center',
        marginTop: '30px',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          height: { md: '90vh' },
          width: { md: '95vw', xs: '98%' },
          display: 'flex',
          margin: '0px',
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
              change. We work to connect, inspire and empower students globally
              through solidarity, democracy, representation and the practice of
              radical change. We work to connect, inspire and empower students
              globally through solidarity, democracy, representation and the
              practice of radical change. We work to connect, inspire and
              empower students globally through: solidarity, democracy,
              representation and the practice of radical change. We work to
              connect, inspire and empower students
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
                  backgroundColor: '#C077F7',
                  color: '#ffffff!important',
                  borderWidth: '12px!important',
                  borderColor: '#C077F7',
                  borderRadius: '50px',
                  letterSpacing: '2px',
                  fontSize: '14px',
                  fontWeight: '900!important',
                  '&:hover': { backgroundColor: '#C077F7' },
                }}
              >
                Get to know us more
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
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  rotate: {
    transform: 'rotate(270deg)',
  },
}));
