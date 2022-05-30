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
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { makeStyles } from '@mui/styles';
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
          padding: '10px 0px 20px 0px',

          borderBottom: '1px solid #acacac',
        }}
      >
        <Grid container direction="row" item xs={5}>
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
        <Grid item xs={3} backgroundColor="yellow">
          dsvsd
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
