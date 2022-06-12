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
                  content="Networking  is an important way to keep a connection with people who share the same interests  and to get informations about the industry you might be interested in. 
                  Networking also helps you to advance your career and gives you access to more job opportunities.  
                  "
                />
                <AimComponent
                  title="Cooperation"
                  content=" A community where students cooperate and help each other is what our platform tries to achieve by acting ,working, and associating everyone together.We try to create a spirit of enthusiasm, enhance understanding and comprehension ability, engage critical thinking and analytical ideas among students along with enabling them to build positive and new relationships and provide the best possible performance in them."
                />
                <AimComponent
                  title="Solidarity"
                  content="
                 Our platform focuses on giving  help to people  as well as it creates  a reinforced  common ground,  a place where 
                   human can be considered and supported.The ability to perceive  and recognize  the full scope  of
                    the comparison of obligations and commitments that are installed in our social nature can occur  just in an
                     atmosphere of solidarity."
                />
                <AimComponent
                  title="Capacity building"
                  content="Capacity building is what every human being needs in their lives, gaining,improving, and retaining skills and knowledge. Our platform provides many possibilies to reach the highest level of knowledge about a specific subject, we kept in mind that  communicating  and sharing experience plays a huge role in capacity building, so the student forum is the perfect platform for that.
                "
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
