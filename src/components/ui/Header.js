import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs   from  '@material-ui/core/Tabs';
import Tab    from  '@material-ui/core/Tab';
import Button from  '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu     from '@material-ui/core/Menu';
import MenuItem  from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'; 
import IconButton from '@material-ui/core/IconButton';
import MenuIcon    from  '@material-ui/icons/Menu';
import List from  '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.svg';

const ElevationScroll = (props) => {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
 
      const useStyles = makeStyles(theme => ({
        toolbarMargin: {
            ...theme.mixins.toolbar,
            marginBottom: "3em",
            [theme.breakpoints.down("md")] : {
                marginBottom: "2em",
            },
            [theme.breakpoints.down("xs")] : {
                marginBottom: "1.25em",
            },
        },
        logo: {
            height: "8em",
            [theme.breakpoints.down("md")] : {
                height: "7em",
            },
            [theme.breakpoints.down("xs")] : {
                height: "5.5em",
            },
        },
        logContainer: {
            padding: 0,
            "&:hover": {
                backgroundColor: "transparent"
            }
        },
        tabContainer: {
            marginLeft: 'auto',
        },
        tab: {
            ...theme.typography.tab,
            marginLeft: "25px",
            minWidth: 10,
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
            fontFamily: "Raleway", 
        },
        button: {
            ...theme.typography.estimate,
            borderRadius: "50px",
            marginLeft: "50px",
            marginRight: "25px",
            height: "45px",
            "&:hover": {
                backgroundColor: theme.palette.secondary.light,
            }
        },
        menu: {
            backgroundColor: theme.palette.common.blue,
            color: "white"
        },
        menuItem: {
            ...theme.typography.tab,
            fontFamily: "Raleway", 
            fontWeight: 700,
            fontSize: "1rem",
            opacity: 0.7,
            "&:hover": {
                opacity: 1
            }
        },
        drawerIcon: {
            height: "50px",
            width: "50px",
            color: "white"
        },
        drawerContainer: {
            marginLeft: "auto",
            "&:hover": {
                backgroundColor: "transparent"
            }
        },
        drawer: {
            backgroundColor: theme.palette.common.blue
        },
        drawerItem: {
            ...theme.typography.tab,
            fontFamily: "Raleway", 
            fontWeight: 700,
            fontSize: "1rem",
            color: "white",
            opacity: 0.7,
            "&:hover": {
                opacity: 1
            }
        },
        drawerItemEstimate: {
            backgroundColor: theme.palette.common.orange,
            
        },
        drawerItemSelected: {
            "& .MuiListItemText-root": {
                opacity: 1
            },
        },
        appbar: {
            zIndex: theme.zIndex.modal + 1,
        }

    }));

const Header = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

   const onTabChange = (e, newValue) =>{
        props.setValue(newValue)
    };

    const handleClick = (e) =>{
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleClose = (e) =>{
        setAnchorEl(null)
        setOpenMenu(false)
    }

    useEffect(() => {
        if(window.location.pathname === "/" && props.value !==0){
            props.setValue(0);
        }else if(window.location.pathname === "/services" && props.value !==1){
            props.setValue(1);
    }else if(window.location.pathname === "/revolution" && props.value !==2){
        props.setValue(2);
    }else if(window.location.pathname === "/about" && props.value !==3){
        props.setValue(3);
    }else if(window.location.pathname === "/contact" && props.value !==4){
        props.setValue(4);
    }else if(window.location.pathname === "/estimate" && props.value !==5){
        props.setValue(5);
    }

            switch(window.location.pathname){
                case "/":
                    if(props.value !== 0){
                        props.setValue(0)
                    }
                    break;
                    case "/services":
                        if(props.value !== 1){
                            props.setValue(1)
                            props.setSelectedIndex(0)
                        }
                        break;
                        case "/customsoftware":
                            if(props.value !== 1){
                                props.setValue(1)
                                props.setSelectedIndex(1)
                            }
                            break;
                            case "/mobileapps":
                                if(props.value !== 1){
                                    props.setValue(1)
                                    props.setSelectedIndex(2)
                                }
                                break;
                             case "/websites":
                                    if(props.value !== 1){
                                        props.setValue(1)
                                        props.setSelectedIndex(3)
                                    }
                                    break;
                              case "/revolution": 
                                        if(props.value !== 2){
                                            props.setValue(2)
                                        }
                                    break;
                                 case "/about":
                                            if(props.value !== 3){
                                                props.setValue(3)
                                            }
                                        break;
                                 case "/contact": 
                                            if(props.value !== 4){
                                                props.setValue(4)
                                            }
                                        break;
                                 case "/estimate":
                                            if(props.value !== 5){
                                                props.setValue(5)
                                            }
                                        break;
                        default: {
                            break;
                        }
            }
},[props.value]);


    const tabs = (
        <React.Fragment>
             <Tabs 
            value={props.value} 
            onChange={onTabChange} 
            className={classes.tabContainer}>
                <Tab 
                className={classes.tab} 
                component={Link} to="/" 
                label="Home"
                 />
                <Tab 
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab} 
                component={Link} 
                onMouseOver={event =>handleClick(event)}
                to="/services" 
                label="Services" 
                />
                <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
                <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                <Tab className={classes.tab} component={Link} to="contact" label="Contact Us" />
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>
                Free Estimate
            </Button>
            <Menu 
                id="simple-menu"
                 anchorEl={anchorEl} 
                 open={openMenu} 
                 onClose={handleClose}
                 classes={{paper: classes.menu}}
                 MenuListProps={{ onMouseLeave: handleClose }}
                 elevation={0}
                 style={{zIndex: 1302}}
                 keepMounted
                 >
                 <MenuItem
                onClick={() => {handleClose(); props.setValue(1)}}
                component={Link} to="/services"
                classes={{root: classes.menuItem}}>Services</MenuItem>
                <MenuItem 
                onClick={() => {handleClose(); props.setValue(1)}}
                component={Link} to="/customsoftware"
                classes={{root: classes.menuItem}}>Custom Software Development</MenuItem>
                <MenuItem 
                onClick={() => {handleClose(); props.setValue(1)}}
                component={Link} to="/mobileapps"
                classes={{root: classes.menuItem}}>iOS/Android App Development</MenuItem>
                <MenuItem 
                onClick={() => {handleClose(); props.setValue(1)}}
                component={Link} to="/websites"
                classes={{root: classes.menuItem}}>Website Development</MenuItem>
            </Menu>
            </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
             disableBackdropTransition={!iOS} 
             disableDiscovery={iOS}
                open={openDrawer}
                 onClose={() => setOpenDrawer(false)}
                  onOpen={() => setOpenDrawer(true)}
                  classes={{paper: classes.drawer}} >
                      <div className={classes.toolbarMargin} />
                    <List disablePadding>
                    <ListItem 
                    classes={{selected: classes.drawerItemSelected}}
                    onClick={() => {setOpenDrawer(false); props.setValue(0)}} 
                    divider 
                    button 
                    component={Link}
                     to="/"
                     selected={props.value === 0 }>
                    <ListItemText 
                    className={ classes.drawerItem } 
                    disableTypography> Home </ListItemText>
                    </ListItem>
                    <ListItem
                     onClick={() => {setOpenDrawer(false); props.setValue(1)}}
                      divider 
                      button 
                      component={Link}
                       to="/services"
                       selected={props.value === 1 }>
                    <ListItemText 
                    disableTypography
                     className={props.value === 1 ?
                        [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem }>Services</ListItemText>
                    </ListItem>
                    <ListItem
                     onClick={() => {setOpenDrawer(false); props.setValue(2)}}
                      divider 
                      button 
                      component={Link}
                       to="/revolution"
                       selected={props.value === 2 }>
                    <ListItemText 
                    disableTypography
                    className={props.value === 2 ?
                        [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem }>The Revolution</ListItemText>
                    </ListItem>
                    <ListItem
                     onClick={() => {setOpenDrawer(false); props.setValue(3)}} 
                     divider
                      button 
                      component={Link} 
                      to="/about"
                      selected={props.value === 3 }>
                    <ListItemText 
                    disableTypography
                    className={props.value === 3 ?
                        [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem }>About Us</ListItemText>
                    </ListItem>
                    <ListItem
                     onClick={() => {setOpenDrawer(false); props.setValue(4)}}
                      divider
                       button
                        component={Link}
                       to="/contact"
                       selected={props.value === 4 }>
                    <ListItemText 
                    disableTypography
                    className={props.value === 4 ?
                        [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem }>Contact Us</ListItemText>
                    </ListItem>
                    <ListItem
                     onClick={() => {setOpenDrawer(false); props.setValue(5)}}
                      divider
                       button
                        component={Link}
                        classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
                       to="/estimate"
                      classes={{root: classes.drawerItemEstimate}}
                      selected={props.value === 5 }>
                    <ListItemText 
                    disableTypography
                    className={ classes.drawerItem }>Free Estimate</ListItemText>
                    </ListItem>
                    </List>
                </SwipeableDrawer>
                <IconButton className={classes.drawerContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                    <MenuIcon className={classes.drawerIcon} />
                </IconButton>
            </React.Fragment>
    )

    return (
        <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar disableGutters>
                <Button component={Link} to="/" disableRipple onClick={()=> props.setValue(0)} className={classes.logContainer}>
            <img  alt="company logo" className={classes.logo} src={logo} />
            </Button>
                {matches ? drawer: tabs}
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}

export default Header;