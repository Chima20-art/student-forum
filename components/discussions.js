import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import PushPinIcon from '@mui/icons-material/PushPin';
import { blue } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { makeStyles } from '@mui/styles';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { Shortcut } from '@mui/icons-material';
import EventNoteIcon from '@mui/icons-material/EventNote';
export default function Discussions() {
  const [menuItem, setMenuItem] = useState('');

  const handleChange = (event) => {
    setMenuItem(event.target.value);
  };
  const classes = useStyles();
  return (
    <Paper
      elevation={3}
      container
      sx={{
        width: { xs: '95%', md: '85%' },
        margin: '20px auto ',
        padding: '30px',
        justifyContent: 'center',
      }}
    >
      <Grid container>
        <Grid
          item
          key="category button"
          container
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Typography sx={{}}>Sorted by:</Typography>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={menuItem}
              onChange={handleChange}
              label="category"
              defaultValue={1}
            >
              <MenuItem value={1}>Newest</MenuItem>
              <MenuItem value={2}>Most comments</MenuItem>
              <MenuItem value={3}>Most Likes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        item
        container
        key="discussion"
        sx={{
          justifyContent: 'space-between',
          padding: '10px 0px 0px 0px',

          borderBottom: '1px solid #acacac',
        }}
      >
        <Grid
          container
          direction="row"
          item
          xs={5}
          sx={{ alignItems: 'center' }}
        >
          <Grid item>
            <PushPinIcon sx={{ color: pink[500] }} />
          </Grid>
          <Grid>
            <Typography sx={{ fontWeight: 'bold' }}>
              This is a post title to be discussed...
            </Typography>
            <Typography sx={{ color: '#acacac', fontSize: '13px' }}>
              Started about 6 years ago by{' '}
              <span className={classes.userName}>Elisa M</span>
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={3}>
          <Grid
            container
            direction="column"
            item
            xs={5}
            sx={{
              justifyContent: 'flex-start',
            }}
          >
            {' '}
            <Grid
              container
              item
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {' '}
              <ChatBubbleIcon />
              <Typography sx={{ fontSize: '23px' }}>926</Typography>
            </Grid>
          </Grid>
          <Grid item xs={7} container direction="column" sx={{}}>
            <Grid
              container
              item
              sx={{
                alignItems: 'center',
                fontSize: '14px',
                color: grey[400],
              }}
            >
              <RemoveRedEyeIcon
                sx={{
                  height: '25px',
                  width: '15px',
                  marginRight: '5px',
                }}
              />
              <Typography sx={{ fontSize: '12px' }}>9800 views</Typography>
            </Grid>
            <Grid container item sx={{ alignItems: 'center' }}>
              <FavoriteIcon
                sx={{
                  height: '25px',
                  width: '15px',
                  marginRight: '5px',
                  color: grey[400],
                }}
              />
              <Typography sx={{ fontSize: '12px', color: grey[400] }}>
                59 likes
              </Typography>
            </Grid>
            <Grid
              container
              item
              sx={{ alignItems: 'center', color: grey[400] }}
            >
              <EventNoteIcon
                sx={{ height: '25px', width: '15px', marginRight: '5px' }}
              />
              <Typography sx={{ fontSize: '12px' }}>4 mounths ago</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  userName: {
    color: 'black',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}));
