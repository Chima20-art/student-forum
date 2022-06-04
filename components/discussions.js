import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import Discussion from './discussion';
export default function Discussions() {
  const [menuItem, setMenuItem] = useState('');

  const handleChange = (event) => {
    setMenuItem(event.target.value);
  };
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
        <Discussion />
        <Discussion />
        <Discussion />
      </Grid>
    </Paper>
  );
}
