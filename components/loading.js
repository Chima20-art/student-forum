import Container from '@mui/material/Container';
import SyncLoader from 'react-spinners/SyncLoader';
import { CSSProperties } from 'react';
import { Typography } from '@mui/material';

const Loading = () => {
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  return (
    <Container
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
        padding: '0px !important',
        margin: '0px !important',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <SyncLoader
        color="#874ED1"
        loading={true}
        cssOverride={override}
        size={25}
      />
    </Container>
  );
};

export default Loading;
