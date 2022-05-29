import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Box } from '@mui/system';
import { useSession } from 'next-auth/react';
import { Grid } from '@mui/material';

export default function Forums() {
  const { data: session, status } = useSession();
  const popularTopics = [
    { icon: 'khbvkh', name: 'music' },
    { icon: 'jebf', name: 'life' },
    { icon: 'vfbf', name: 'entertaiment' },
    { icon: 'kvkh', name: 'high school' },
    { icon: 'bbdv', name: 'exams' },
    { icon: 'deveg', name: 'money' },
    { icon: 'wegg', name: 'jobs' },
  ];

  return (
    <Box>
      <ResponsiveAppBar status={status} />
      <Grid
        sx={{
          maxWidth: { md: '85%' },
          margin: 'auto',

          border: '2px black solid',
        }}
      >
        <Grid
          sx={{
            color: '#2668F0',
            fontStyle: 'bold',
            fontSize: { xs: '35px', md: '40px' },
            fontWeight: 700,
            letterSpacing: '0.4px',
            lineHeight: { md: '1.5em', xs: '0.8' },
            fontFamily: 'Londrina Solid',
            marginTop: '0px 25px',
          }}
        >
          Student Edge Youth Forums
        </Grid>
        <Box></Box>
      </Grid>
    </Box>
  );
}
