import { Box, Grid } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import backgroundImage from '../public/students.svg';
import { Paper } from '@mui/material';
export default function Aims() {
  const classes = useStyles();
  return (
    <Box>
      <ResponsiveAppBar />
      <Grid
        container
        sx={{
          width: { xs: '98vw', md: '85vw' },
          margin: ' 64px auto ',
          padding: 10,
          //backgroundColor: 'red',
        }}
        component={Paper}
        elevation={2}
      >
        <Grid
          item
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            backgroundColor: 'brown',
            padding: '40px',
            textAlign: '20px',
            justifyContent: 'space-between',
            margin: 'auto',
          }}
        >
          <Grid
            item
            xs={5}
            sx={{
              fontWeight: 700,
              fontSize: '30px',
              letterSpacing: '1px',
              lineHeight: '1.5em',
            }}
          >
            Values
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              fontWeight: 700,
              fontSize: '30px',
              letterSpacing: '1px',
              lineHeight: '1.5em',
            }}
          >
            Missions
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  sasd: {
    backgroundColor: 'red',
    width: '100vw',
    height: '100vh',
    backgroundImage: "url('/students.svg')",
    backgroundRepeat: 'no-repeat',
  },
}));