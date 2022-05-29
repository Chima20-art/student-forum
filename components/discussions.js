import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react';

export default function Discussions() {
  const [menuItem, setMenuItem] = useState('');

  const handleChange = (event) => {
    setMenuItem(event.target.value);
  };
  return (
    <Box
      container
      sx={{
        width: { xs: '95%', md: '85%' },
        margin: '20px auto ',
      }}
    >
      <Paper elevation={3}>
        <Grid sx={{ padding: '30px' }}>
          <Grid
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
      </Paper>
    </Box>
  );
}
