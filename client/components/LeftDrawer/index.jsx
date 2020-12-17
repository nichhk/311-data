import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/Link';
import { connect } from 'react-redux';
import { toggleMenu as reduxToggleMenu } from '@reducers/ui';
import Radio from '@material-ui/core/Radio';

const drawerWidth = 275;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#2A404E',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  share: {
    marginBottom:'100px',
    paddingLeft:'25px',
  },
  listItem:{
    paddingTop:'15px',
    paddingBottom:'15px',
    height:'24px',
  },
  listItemTitle:{
    paddingLeft: '28px',
  }
}));

const PersistentDrawerLeft = ({menuIsOpen, toggleMenu}) => {

  // TODO ADD FUNCTIONALITY
  const [selectedMapStyleValue, setMapStyleValue] = React.useState('');
  const [selectedMapModeValue, setMapModeValue] = React.useState('');
  const [selectedDataColorScheme, setDataColorScheme] = React.useState('');
  const [selectedBoundariesValue, setBoundariesValue] = React.useState('');
  
  
  const handleChangeMapStyle = (event) => {
    setMapStyleValue(event.target.value);
  };
  const handleChangeMapMode = (event) => {
    setMapModeValue(event.target.value);
  };
  const handleChangeDataColorScheme = (event) => {
    setDataColorScheme(event.target.value);
  };
  const handleChangeBoundaries = (event) => {
    setBoundariesValue(event.target.value);
  };
  const classes = useStyles();
  const theme = useTheme();

  const escFunction = e => {
    e.preventDefault();
    if (e.key === "Escape"
    ) {
      toggleMenu();
    }
  };

  const onClickShare = e => {
    // TODO ADD FUNCTIONALITY
    console.log('clicked')
  }

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={menuIsOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleMenu}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem key={'Map Style'} className={classes.listItemTitle}>
            <ListItemText primary='Map Style'/>
          </ListItem>
          {['Point Map', 'Heat Map'].map((text, index) => (
            <ListItem className={classes.listItem} 
              style={{color: selectedMapStyleValue===text && '#87C8BC'}} 
              button key={text} 
              >
              <ListItemIcon>
                <Radio
                  checked={selectedMapStyleValue === text}
                  onChange={handleChangeMapStyle}
                  value={text}
                  style={{color:selectedMapStyleValue === text && '#87C8BC'}}
                  name='radio-button'
                  inputProps={{ 'aria-label': text }}
                />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {
          /**
           * TODO ADD DYNAMIC LIST OF ITEMS
           * ADD COLOR TO RADIO BUTTONS
           */
        }
        <List>
        <ListItem key={'Map Mode'} className={classes.listItemTitle}>
            <ListItemText primary='Map Mode'/>
          </ListItem>
          {['Dark', 'Light', 'Street'].map((text, index) => (
            <ListItem
              style={{color: selectedMapModeValue===text && '#87C8BC'}}
              button key={text}
              className={classes.listItem}
            >
              <ListItemIcon>
                <Radio
                  checked={selectedMapModeValue === text}
                  onChange={handleChangeMapMode}
                  value={text}
                  style={{color:selectedMapModeValue === text && '#87C8BC'}}
                  name="radio-button"
                  inputProps={{ 'aria-label': text }}
                />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
        <ListItem key={'Data Color Scheme'} className={classes.listItemTitle}>
            <ListItemText primary='Data Color Scheme'/>
          </ListItem>
          {['Original', 'Prism', 'Bold'].map((text, index) => (
            <ListItem
              style={{color: selectedDataColorScheme===text && '#87C8BC'}}
              button key={text}
              className={classes.listItem}
            >
              <ListItemIcon>
                <Radio
                  checked={selectedDataColorScheme === text}
                  onChange={handleChangeDataColorScheme}
                  value={text}
                  style={{color:selectedDataColorScheme === text && '#87C8BC'}}
                  name="radio-button"
                  inputProps={{ 'aria-label': text }}
                />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
        <ListItem key={'Boundaries'} className={classes.listItemTitle} >
            <ListItemText primary='Boundaries'/>
          </ListItem>
          {['None', 'Neighborhood Councils', 'City Councils'].map((text, index) => (
            <ListItem
              style={{color: selectedDataColorScheme===text && '#87C8BC'}}
              button key={text}
              className={classes.listItem}
              selected={selectedBoundariesValue===text}
            >
              <ListItemIcon>
                <Radio
                  checked={selectedBoundariesValue === text}
                  onChange={handleChangeBoundaries}
                  value={text}
                  style={{color:selectedBoundariesValue === text && '#87C8BC'}}
                  name="radio-button"
                  inputProps={{ 'aria-label': text }}
                />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem key={'Share'} className={classes.share}>
            <ListItemIcon onClick={onClickShare}>
              <LinkIcon/>
            </ListItemIcon>
            <ListItemText primary='Share'/>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}


const mapStateToProps = state => ({
  menuIsOpen: state.ui.menu.isOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(reduxToggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(PersistentDrawerLeft);