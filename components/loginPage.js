import ResponsiveAppBar from './ResponsiveAppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { red } from '@mui/material/colors';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Londrina+Solid&family=M+PLUS+Code+Latin:wght@600&family=Nanum+Gothic&family=Raleway:wght@300&display=swap');
</style>;
export default function LoginPage() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      >
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
      </Box>
    </Box>
  );
}
