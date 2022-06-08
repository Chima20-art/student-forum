import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';
import SelectVariants from '../components/SelectVariants';
import { TextareaAutosize } from '@mui/base';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function CreateDiscussion() {
  const [text, setText] = useState('');
  const { data: session, status } = useSession();

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <Grid>
      <ResponsiveAppBar status={status} />
      <Grid
        sx={{
          maxWidth: { md: '85%', xs: '98%' },
          margin: ' 20px auto',
        }}
      >
        <Link href="/forums" key="forums">
          <Typography
            sx={{
              margin: '12px 0px',
              color: '#1A76D2',
              borderBottom: 'dashed',
              width: 'fit-content',
              cursor: 'pointer',
            }}
          >
            Back to All Discussions
          </Typography>
        </Link>
        <Typography
          sx={{
            margin: '12px 0px',
            color: '#1A76D2',
            fontSize: '35px',
          }}
        >
          Start a New Discussion Thread
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: '30px',
            paddingTop: '60px',
            paddingBottom: { sx: '10px', md: '1px' },
          }}
        >
          <Grid
            sx={{ borderBottom: '1px solid #DCDCDC', paddingBottom: '60px' }}
          >
            <TextField
              required
              id="standard-required"
              placeholder="Quick summary of what you want to talk about"
              label="Discussion title"
              variant="standard"
              inputProps={{ maxLength: 140, minLength: 5 }}
              helperText="Please enter a title (140 characters)"
              sx={{
                display: 'flex',
                width: '70%',
                textAlign: 'center',
                margin: 'auto',
              }}
            />
            <SelectVariants />
          </Grid>
          <Grid
            sx={{
              width: '70%',
              paddingTop: '60px',
              justifyContent: 'flex-center',
              textAlign: 'flex-start',
              margin: 'auto',
            }}
          >
            <Typography
              sx={{
                fontSize: '.8em',
                fontWeight: '600',
                color: '#263844 ',
              }}
            >
              Discussion Background
            </Typography>
            <Typography sx={{ fontSize: '.725em', color: '#263344' }}>
              Give some detail about your discussion to encourage other members
              to respond, add #tags to help users find your thread.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              width: '70%',
              paddingTop: '40px',
              justifyContent: 'flex-center',
              textAlign: 'flex-start',

              margin: 'auto',
            }}
          >
            <TextField
              md={12}
              id="outlined-basic"
              label="More Detail to give context to other readers"
              fullWidth
              outlined
              multiline
              rows={7}
              placeholder="More Detail to give context to other readers"
              variant="outlined"
              value={text}
              onChange={handleChange}
              sx={{ backgroundColor: '#F5F5F5' }}
            />
          </Grid>
          <Typography
            sx={{
              width: '70%',
              margin: 'auto',
              padding: '60px 0px',
              display: 'flex',
              justifyContent: 'flex-end',
              color: '#F5F5F5',
            }}
          >
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
              >
                create a thread{''}
              </Button>
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
