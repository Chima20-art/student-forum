import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { makeStyles } from '@mui/styles';
import { useSession, signIn, signOut } from 'next-auth/react';

import { styled } from '@mui/material/styles';

const ResponsiveAppBar = (props) => {
  const { status } = props;
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const pages = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'News',
      path: '/news',
    },
    {
      name: 'Posts',
      path: '/posts',
    },
    {
      name: 'Posts',
      path: '/posts',
    },
  ];
  const loginPages = [
    { name: 'About', path: '/' },
    { name: 'Our Aims', path: '/Aims' },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {status == 'authenticated'
                ? pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))
                : null}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>
            {status == 'authenticated'
              ? pages.map((page) => (
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                ))
              : null}
          </Box>
          <Box
            sx={{
              flexGrow: 3,
              display: { xs: 'none', md: 'flex' },
              justifyContent: { xs: 'none', md: 'flex-end' },
            }}
          >
            {status == 'unauthenticated'
              ? loginPages.map((loginPage) => (
                  <Button
                    key={loginPage.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: 'block',
                      color: 'white',
                    }}
                  >
                    {loginPage.name}
                  </Button>
                ))
              : console.log('user logged')}
          </Box>
          <Box>
            {' '}
            <Button
              onClick={() => signIn('google')}
              variant="outlined"
              className={classes.button}
            >
              LOGIN WITH GOOGLE
            </Button>
          </Box>

          <Box
            sx={{ flexGrow: 0 }}
            className={
              status == 'unauthenticated' ? classes.none : classes.show
            }
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="profile" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem key="profile" onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={signOut}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'white !important',
  },
  none: {
    display: 'none',
  },
}));
