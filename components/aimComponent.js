import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function AimComponent(props) {
  const { title, content } = props;

  return (
    <Grid
      container
      direction="row"
      item
      xs={5}
      md={6}
      sx={{ marginTop: '30px' }}
    >
      <Grid
        md={1}
        item
        sx={{
          textAlign: 'flex-start',
          color: '#AD236D',
        }}
      >
        <CheckCircleIcon />
      </Grid>{' '}
      <Grid md={11} item>
        {' '}
        <Typography sx={{ color: '#333', fontWeight: 700 }}>
          {' '}
          {title}
        </Typography>
        <Typography
          item
          sx={{
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '1px',
            lineHeight: '1.7em',
            color: '#666',
            textAlign: 'justify',
          }}
        >
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
}
