import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSession } from 'next-auth/react';

import { Paper } from '@mui/material';
import AimComponent from './aimComponent';

export default function Missions() {
  const { data: session, status } = useSession();

  const classes = useStyles();
  return (
    <Box
      sx={{
        backgroundColor: '#4E246E',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Grid>
        <Grid
          item
          xs={5}
          sx={{
            fontWeight: 700,
            fontSize: '30px',
            letterSpacing: '1px',
            lineHeight: '1.5em',
            textAlign: 'center',
            margin: ' 0px auto 20px auto ',
            color: '#fff',
            width: 'fit-content',
          }}
        >
          Missions
        </Grid>
        <Grid
          container
          sx={{
            width: { xs: '98vw', md: '85vw' },
            margin: 'auto',
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
              padding: '0px 40px',
              textAlign: '20px',
              justifyContent: 'space-between',
              margin: '0px auto',
            }}
          >
            <Grid container direction="row" spacing={4}>
              <Grid container direction="row" spacing={4}>
                <AimComponent
                  title="Networking"
                  content="The GSF is a platform for student organisations to exchange ideas, practices and tactics. It allows us as student movements and grassroots activists from around the world to build relationships and networks with like minded organizations and natural allies such as teachers and trade unions."
                />
                <AimComponent
                  title="Networking"
                  content="The GSF is a platform for student organisations to exchange ideas, practices and tactics. It allows us as student movements and grassroots activists from around the world to build relationships and networks with like minded organizations and natural allies such as teachers and trade unions."
                />
                <AimComponent
                  title="Networking"
                  content="The GSF is a platform for student organisations to exchange ideas, practices and tactics. It allows us as student movements and grassroots activists from around the world to build relationships and networks with like minded organizations and natural allies such as teachers and trade unions."
                />
                <AimComponent
                  title="Networking"
                  content="The GSF is a platform for student organisations to exchange ideas, practices and tactics. It allows us as student movements and grassroots activists from around the world to build relationships and networks with like minded organizations and natural allies such as teachers and trade unions."
                />
              </Grid>
            </Grid>
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
