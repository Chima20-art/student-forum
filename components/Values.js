import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSession } from 'next-auth/react';

import { Paper } from '@mui/material';
import AimComponent from './aimComponent';

export default function Aims() {
  const { data: session, status } = useSession();

  const classes = useStyles();
  return (
    <Box
      id="Values"
      sx={{
        backgroundColor: '#C16EE1',
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
          Values
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
                  title="Human Rights and Solidarity"
                  content="We come together to urgently develop solidarity and collaboration, in order to achieve educational justice and as allies in a wider struggle for democracy, social justice and human rights.

                  We do so by building this platform that practices democratic values itself, 
                  energising our collective action and building democracy through our own horizontal structure, 
                  putting the aspirations and needs of student representative bodies at the forefront of our work. 
                "
                />
                <AimComponent
                  title="global cooperation "
                  content="Talking about  global  cooperation  is obviously talking about all countries or nations working  together  to accomplish global issues and missions. 
                  Since the global  cooperation domain is committed  on a global scale in favor of globalization conducive and development. 
                  The student forum focuses on certain themes that can be very important for each student to build a shiny future. "
                />

                <AimComponent
                  title="Feminism"
                  content="We understand that feminist politics in student organisations and movements are important for political, 
                  economic, personal, and social equality. We recognise the rights of women and girls and stand together with all
                   people because our struggles are interconnected and we are resolute in our fight to uphold the rights of people 
                   in every country."
                />
                <AimComponent
                  title="Democracy"
                  content="Democracy is a double sided sword where it gives us the right to decide from what the minorities already decided. 
                  There for the student forum choose to be democratic with students and give them the opportunity to make decisions and to help them with the self-learning"
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
