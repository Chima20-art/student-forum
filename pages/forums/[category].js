import { useRouter } from 'next/router';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import Discussion from '../../components/discussion';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';

const CategoryPage = (props) => {
  const classes = useStyles;
  const router = useRouter();
  const { category } = router.query;
  const { data: session, status } = useSession();

  return (
    <Grid>
      <ResponsiveAppBar session={status} />
      <Grid
        container
        sx={{
          marginTop: { md: '20px', xs: '10px' },
          width: { xs: '95%', md: '85%' },
          margin: 'auto',

          flexDirection: 'column',
        }}
      >
        <Link href="/forums" key="forums" className={classes.link}>
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
        <Typography
          sx={{
            margin: '12px 0px',
            color: '#1A76D2',
            fontSize: '35px',
          }}
        >
          {category} Forums
        </Typography>
        <Paper
          elevation={3}
          container
          sx={{
            margin: '20px auto ',
            padding: '30px',
            justifyContent: 'center',
          }}
        >
          <Grid
            item
            key="category button"
            container
            sx={{
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Discussion />
            <Discussion />
            <Discussion />
          </Grid>
        </Paper>
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
