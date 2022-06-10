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
import Image from 'next/image';
import Link from 'next/link';

import { styled } from '@mui/material/styles';

const ResponsiveAppBar = (props) => {
  let { setCurrentPage } = props;
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { data: session, status } = useSession();

  const {
    email: userEmail,
    image: userImage,
    name: userName,
  } = session?.user ?? {};

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
      name: 'Forums',
      path: '/',
    },
  ];
  const loginPages = [
    { name: 'About', path: '/' },
    { name: 'Forums', path: '/forums' },
    { name: 'Our Aims', path: '/#Values' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: 'white', color: '#666664' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Italianno, cursive',
              fontSize: '34px',
              fontWeight: 'bold',
              color: '#AD236D',
            }}
          >
            {' '}
            The student forum
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
                    sx={{ my: 2, color: '#AD236D', display: 'block' }}
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
            {status == 'unauthenticated' && setCurrentPage && (
              <>
                <Button
                  onClick={() => {
                    if (setCurrentPage) {
                      setCurrentPage(0);
                    }
                  }}
                  sx={{
                    my: 2,
                    display: 'block',
                    color: '#AD236D',
                  }}
                >
                  About
                </Button>
                <Button
                  onClick={() => {
                    if (setCurrentPage) {
                      setCurrentPage(1);
                    }
                  }}
                  sx={{
                    my: 2,
                    display: 'block',
                    color: '#AD236D',
                  }}
                >
                  Values
                </Button>
                <Button
                  onClick={() => {
                    if (setCurrentPage) {
                      setCurrentPage(2);
                    }
                  }}
                  sx={{
                    my: 2,
                    display: 'block',
                    color: '#AD236D',
                  }}
                >
                  Missions
                </Button>
                <Button
                  onClick={() => {
                    if (setCurrentPage) {
                      setCurrentPage(3);
                    }
                  }}
                  sx={{
                    my: 2,
                    display: 'block',
                    color: '#AD236D',
                  }}
                >
                  Login
                </Button>
              </>
            )}
          </Box>

          {status == 'authenticated' && (
            <Box sx={{ flexGrow: 0 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Typography sx={{ marginRight: '12px' }}>
                      {userName}
                    </Typography>
                    <Avatar alt="Remy Sharp" src={userImage} />
                  </IconButton>
                </Tooltip>
              </Box>

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
                <MenuItem key="Logout" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={signOut}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;

const useStyles = makeStyles((theme) => ({
  none: {
    display: 'none',
  },
}));
