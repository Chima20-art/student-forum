import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

export default function SelectVariants() {
  const categories = [
    { name: 'Movies' },
    { name: 'University' },
    { name: 'Study Help' },
    { name: 'Music' },
    { name: 'Gaming' },
    { name: 'Jobs' },
    { name: 'Money' },
    { name: 'Careers' },
    { name: 'Sports & Health' },
    { name: 'Hobbies' },
    { name: 'Pop Culture' },
    { name: 'Fashion & beauty' },
  ];

  const [category, setCategory] = React.useState('');

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
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChange}
          label="Category"
          sx={{ width: '100%' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem value={category.name} key={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
