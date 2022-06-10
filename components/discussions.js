import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import Discussion from './discussion';
import { useEffect } from 'react';
import Loading from './loading';

export default function Discussions({ posts }) {
  const [sorting, setSorting] = useState(1);
  const [sortedPosts, setSortedPosts] = useState(posts);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Loading small />;
  }

  const handleChange = (event) => {
    setSorting(event.target.value);
    setLoading(true);
    switch (event.target.value) {
      case 1:
        posts?.sort((a, b) => {
          return a?.createdAt <= b?.createdAt ? 1 : -1;
        });
        setSortedPosts(posts);
        setLoading(false);
        break;
      case 2:
        posts?.sort((a, b) => {
          return a?.comments?.length <= b?.comments?.length ? 1 : -1;
        });

        setSortedPosts(posts);
        setLoading(false);
        break;
      case 3:
        posts?.sort((a, b) => {
          return a?.likes?.length <= b?.likes?.length ? 1 : -1;
        });
        setSortedPosts(posts);
        setLoading(false);
        break;
      case 4:
        posts?.sort((a, b) => {
          return a?.createdAt >= b?.createdAt ? 1 : -1;
        });
        setSortedPosts(posts);
        setLoading(false);
        break;
      default:
        break;
    }
  };
  return (
    <Paper
      elevation={3}
      sx={{
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
              value={sorting}
              onChange={handleChange}
              label="category"
              defaultValue={1}
            >
              <MenuItem value={1}>Newest</MenuItem>
              <MenuItem value={2}>Most comments</MenuItem>
              <MenuItem value={3}>Most Likes</MenuItem>
              <MenuItem value={4}>Oldest</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {sortedPosts?.map((post) => {
          if (!post?.id) return null;
          return <Discussion key={post?.id} post={post} />;
        })}
      </Grid>
    </Paper>
  );
}
