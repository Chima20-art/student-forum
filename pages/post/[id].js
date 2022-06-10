import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';

export default function Post({}) {
  const router = useRouter();

  return (
    <Grid
      container
      direction="column"
      sx={{
        height: '100vh',
        margin: '0px',
      }}
    >
      <ResponsiveAppBar setCurrentPage={null} />
    </Grid>
  );
}
