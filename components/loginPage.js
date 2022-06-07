import ResponsiveAppBar from './ResponsiveAppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { red } from '@mui/material/colors';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LoginComponent from './loginComponent';
import WelcomeComponent from './welcomeComponent';
import ReactPageScroller from 'react-page-scroller';

export default function LoginPage() {
  const classes = useStyles();

  return (
    <ReactPageScroller>
      <WelcomeComponent />
      <LoginComponent small={true} />
    </ReactPageScroller>
  );
}
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'white !important',
  },
  red: {
    backgroundColor: 'red',
  },
}));
/*  A world where students are empowered and supported to make great
life choices. The Global Student Forum is a platform for students
and their movements to build networks and facilitate active
solidarity through digital campaigns and on the ground action.
Through cooperation, analysis and strategy it serves as a
coordinator for targeted political action and advocacy efforts
facilitated for and by students.*/
