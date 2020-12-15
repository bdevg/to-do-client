import React from 'react';
import Link from "next/link";
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import clsx from "clsx";
// custom import
import Footer from "./Footer";
import MenuList from "./MenuList";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiAppBar-colorPrimary':{
      backgroundColor:"#607d8b"
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 20,
    padding:"0px"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    "& .MuiDrawer-paperAnchorDockedLeft":{
          borderRight:"0px solid rgba(0, 0, 0, 0.12)"
     },
    [theme.breakpoints.up('sm')]:{
      "& .MuiDrawer-paperAnchorDockedLeft":{
          borderRight:"1px solid rgba(0, 0, 0, 0.12)"
      }
    }
  },
  drawerOpen: {
    width:drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    "& .MuiDrawer-paperAnchorDockedLeft":{
          borderRight:"1px solid rgba(0, 0, 0, 0.12)"
    }
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width:0,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  chevronIconContainer:{
    position:"fixed",
    top:0,
    left:`${drawerWidth-70}px`,
    zIndex:theme.zIndex.drawer + 1,
    backgroundColor:"white",
    borderBottomLeftRadius:"100%"
  },
  menuList:{
    marginTop:"37px",
    [theme.breakpoints.up('sm')]:{
      marginTop:"54px"
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  layersIcon:{
      color:"white"
  },
  todoIconButton:{
    padding:"0px"
  }
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return <div className={classes.root}>
  <CssBaseline />
  <AppBar
    position="fixed"
    className={clsx(classes.appBar, {
      [classes.appBarShift]: open,
    })}
  >
    <Toolbar>
      <IconButton
        color="secondary"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open,
        })}
      >
        <MenuIcon />
      </IconButton>
          <Typography variant="h6" noWrap>
            ToDo
          </Typography>

          <Link href="/">
            <IconButton className={classes.todoIconButton} aria-label="home page" color="secondary">
                <Avatar  alt="Rahul" src="/favicon.ico" />
            </IconButton>
          </Link>
    </Toolbar>
  </AppBar>
  <Drawer
    variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open,
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      }),
    }}
  >
    <div className={`${classes.toolbar} ${classes.chevronIconContainer}`}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
    <Divider />
      <List className={classes.menuList}>
        <MenuList/>
      </List>
  </Drawer>
    <main className={classes.content}>
          <div className={classes.toolbar} />
            {props.children}
          <Footer/>
    </main>
  
</div>
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
