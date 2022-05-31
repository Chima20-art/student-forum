import { Paper, Typography, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function AddDiscussion() {
  return (
    <Paper
      container
      elevation={3}
      sx={{
        width: { xs: '95%', md: '85%' },
        margin: '20px auto',
        padding: '30px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        item
        sx={{
          fontSize: '1.25em',
          fontWeight: '600',
          textAlign: 'center',
          margin: '10px 0px',
        }}
      >
        Didn't find what you are looking for ?
      </Typography>
      <Typography
        item
        sx={{
          fontSize: '1.1em',
          fontWeight: '100',
          color: '#acacac',
          textAlign: 'center',
          margin: '35px 0px 20px 0px',
        }}
      >
        How about starting a new conversation by creating a new post!
      </Typography>
      <Typography align="center">
        <Button
          item
          sx={{
            color: 'white',
            backgroundColor: '#2668F1',
            padding: '15px',
            borderRadius: '25px',
          }}
          startIcon={<AddCircleIcon />}
        >
          create a thread{' '}
        </Button>
      </Typography>
    </Paper>
  );
}
