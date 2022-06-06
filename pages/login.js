import React, { useState } from 'react';
import { Grid } from '@mui/material';
import LoginComponent from '../components/loginComponent';

export default function Login() {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  return (
    <Grid
      container
      direction="column"
      sx={{
        height: '100vh',
        margin: 'auto',
        justifyContent: 'center',
      }}
    >
      {' '}
      <LoginComponent />
    </Grid>
  );
}
