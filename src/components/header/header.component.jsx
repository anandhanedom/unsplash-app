import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Actions
import {
  changeModalType,
  toggleModal,
} from '../../redux/modal/modal.actions.js';
import {
  logoutAsync,
  addUserDetailsToStore,
} from '../../redux/auth/auth.actions.js';
import { handleSearchChange } from '../../redux/images/images.actions';

//Selectors
import { selectUser } from '../../redux/auth/auth.selectors';

//Material UI
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Close</MenuItem>
      <MenuItem
        onClick={async () => {
          handleMenuClose();
          await props.logoutAsync();
          props.history.push('/auth');
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    const parsedToken = JSON.parse(atob(access_token.split('.')[1]));

    props.addUserDetailsToStore(parsedToken.username);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        elevation={0}
        style={{ background: '#fff', color: '#000' }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle style={{ fontSize: 35 }} />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            style={{ fontWeight: 500 }}
          >
            {props.user}
          </Typography>
          <div
            className={classes.search}
            style={{ borderRadius: '24px', border: '1px solid #BDBDBD' }}
          >
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: '#BDBDBD' }} />
            </div>
            <InputBase
              placeholder="Search by name"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              style={{ color: '#333' }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => {
                props.handleSearchChange(e.target.value);
              }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              variant="contained"
              color="primary"
              style={{
                borderRadius: '24px',
                textTransform: 'initial',
                background: '#3DB46D',
              }}
              size="large"
              onClick={() => {
                props.changeModalType(false);
                props.toggleModal();
              }}
            >
              Add photo
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <Button
              variant="contained"
              color="primary"
              style={{
                borderRadius: '24px',
                width: '130px',
                textTransform: 'initial',
                background: '#3DB46D',
              }}
              onClick={() => {
                props.changeModalType(false);
                props.toggleModal();
              }}
            >
              Add photo
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  changeModalType: (type) => dispatch(changeModalType(type)),
  handleSearchChange: (value) => dispatch(handleSearchChange(value)),
  logoutAsync: () => dispatch(logoutAsync()),
  addUserDetailsToStore: (username) =>
    dispatch(addUserDetailsToStore(username)),
});

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
