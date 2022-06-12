import React, { useState } from 'react';
import { Grid } from '@mui/material';
import LoginComponent from '../components/loginComponent';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

export default function Login() {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status == 'authenticated') {
    router.push('/forums');
  }
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
      <LoginComponent />
    </Grid>
  );
}
