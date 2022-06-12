import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

export default function SelectVariants({
  categories,
  category,
  setCategory,
  error,
}) {
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Grid sx={{ width: '70%', margin: 'auto', marginTop: '50px' }}>
      <FormControl
        variant="standard"
        sx={{
          width: '30%',
        }}
      >
        <InputLabel id="demo-simple-select-standard-label">
          Discussion Category
        </InputLabel>
        <Select
          error={error}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChange}
          label="Category"
          sx={{ width: '100%' }}
        >
          {categories.map((category) => (
            <MenuItem value={category.id} key={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
