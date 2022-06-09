import { Paper, Typography, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Link from 'next/link';

export default function AddDiscussion() {
  return (
    <Paper
      container
      elevation={3}
      sx={{
        margin: '20px 0px',
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
        Did not find what you are looking for ?
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
        <Link href="/createDiscussion" key="createDiscussion">
          <Button
            item
            sx={{
              color: 'white',
              backgroundColor: '#2668F1',
              padding: '15px',
              borderRadius: '25px',
              '&:hover': { backgroundColor: '#2668F9' },
            }}
            startIcon={<AddCircleIcon />}
          >
            create a thread{''}
          </Button>
        </Link>
      </Typography>
    </Paper>
  );
}
