import ResponsiveAppBar from './ResponsiveAppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { red } from '@mui/material/colors';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LoginComponent from './loginComponent';

export default function LoginPage() {
  const classes = useStyles;

  return (
    <Box sx={{ height: { md: 'fit-content' } }}>
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
        <Box
          container
          sx={{
            display: 'flex',
            height: 500,
            width: '50%',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'center' },
            textAlign: { xs: 'center', md: 'center' },
            justifyContent: { xs: 'center', md: 'center' },
            minWidth: { md: 350 },
          }}
        >
          <Box
            component="span"
            sx={{
              width: 500,
              fontSize: 22,
              color: '#2668F0',
              fontStyle: 'bold',
              textAlign: 'right',
              fontSize: '40px',
              fontWeight: 700,
              letterSpacing: '0.4px',
              lineHeight: '1.5em',
              fontFamily: 'Londrina Solid',
            }}
          >
            {' '}
            What is the student hub? <br />
          </Box>
          <Box
            component="span"
            sx={{
              fontSize: 22,
              width: 500,
              textAlign: 'justify',
              lineHeight: '1.8em',
              color: '#666',
              fontWeight: 200,
              letterSpacing: '0.4px',
              fontFamily: 'Londrina Solid',
            }}
          >
            A world where students are empowered and supported to make great
            life choices. The Global Student Forum is a platform for students
            and their movements to build networks and facilitate active
            solidarity through digital campaigns and on the ground action.
            Through cooperation, analysis and strategy it serves as a
            coordinator for targeted political action and advocacy efforts
            facilitated for and by students.
          </Box>
        </Box>
        <Box
          component="img"
          xs={{
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: '10vh', md: '10vh' },
          }}
          alt="students innovation ideas image"
          src="/Untitled design.svg"
        />
      </Box>
      <Box sx={{ margin: '24px 0px' }}>
        <LoginComponent small={true} />
      </Box>
      <Grid
        marginTop="24px"
        marginBottom="24px"
        item
        container
        sx={{
          flexDirection: 'row',

          alignItems: 'center',

          lineHeight: '1.3em',
          fontWeight: 'bold',
          fontFamily: 'Londrina Solid',
        }}
      >
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'justify',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            sx={{
              lineHeight: '1.8em',
              fontSize: 20,
              maxWidth: '90%',
              color: '#666',
              fontWeight: 200,
              letterSpacing: '0.4px',
              fontFamily: 'Londrina Solid, display',
            }}
          >
            <b>
              {' '}
              We work to connect, inspire and empower students globally through
              <br />{' '}
              <b>
                solidarity, democracy, representation and the practice of
                radical change.{' '}
              </b>
            </b>
          </Typography>
        </Grid>
        <Grid
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
              backgroundColor: '#FFAE01',
              color: '#ffffff!important',
              borderWidth: '12px!important',
              borderColor: '#F2C950',
              borderRadius: '50px',
              letterSpacing: '2px',
              fontSize: '14px',
              fontWeight: '900!important',
            }}
          >
            Get to know us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'white !important',
  },
}));
