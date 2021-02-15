import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles, useTheme} from '@material-ui/styles';
import { Link }  from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery   from '@material-ui/core/useMediaQuery';
import Card  from '@material-ui/core/card';
import CardContent from '@material-ui/core/cardContent';

import CallToAction from './ui/CallToAction';

import animationData from '../animations/landinganimation/data';
import ButtonArrow from '../components/ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon  from '../assets/mobileIcon.svg';
import websitesIcon  from '../assets/websiteIcon.svg';
import revolutionBackground  from '../assets/repeatingBackground.svg';
import infoBackground   from  '../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")] : {
            maxWidth: 30
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    buttonContainer: {
        marginTop: "1em",
        },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em",
        }
    },
 mainContainer: {
     marginTop: "5em",
     [theme.breakpoints.down("md")] : {
         marginTop: "3em"
     },
     [theme.breakpoints.down("xs")] : {
        marginTop: "2em"
    },
 },
heroTextContainer:{
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")] : {
        marginLeft: 0,
    }
},
specialText: {
  fontFamily: "Pacifico",
  color: theme.palette.common.orange,
},
subtitle:{  
    marginBottom: "1em"    
},
icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
    } 
},
serviceContainer: {
    marginTop: "12em",
    padding: 25,
},
revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
},
revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: "15",
    padding: "5em",

    [theme.breakpoints.down("sm")]: {
        paddingTop: "8em",
        paddingBottom: "8em",
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        width: "100%",

    }
},
infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
}


}));

const LandingPage = (props) => {

    const classes = useStyles();
    const theme  =  useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm")); 
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs")); 

    const defaultOptions = {
        loop: true,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>{/*----Start of Hello block---*/}
        <Grid container justify="flex-end" alignItems="center" direction="row">
        <Grid  sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
            Bringing Silcon Valley Technology<br />Straight to Thousand Hills
            </Typography>
        <Grid container justify="center" className={classes.buttonContainer}>
        <Grid item>
            <Button 
            component={Link} 
            to="/estimate" 
            className={classes.estimateButton} 
            variant="contained"
            onClick={() => props.setValue(5)}
            >
                Free Estimate
            </Button>
        </Grid>
        <Grid item>
            <Button 
            component={Link} 
            to="/revolution" 
            variant="outlined" 
            className={classes.learnButtonHero}
            onClick={() => props.setValue(2)}
                >
                <span style={{marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
        </Grid>
        </Grid>
        </Grid>
        <Grid sm item className={classes.animation} >
         <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </Grid>
        </Grid>
        </Grid>{/*----End of Hello block---*/}
        <Grid item>{/*----Start of custom software service block---*/}
        <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
        <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
        <Typography variant="h4">
            Custom Software Development
        </Typography>
        <Typography variant="subtitle1">
            Save Energy. Save Time. Save Money.
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
            Complete digital solutions, from investigation to {" "} 
            <span className={classes.specialText}>celebration.</span>
        </Typography>
        <Button 
        component={Link}
         to="/customsoftware"
          variant="outlined"
           className={classes.learnButton}
           onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
            >
        <span style={{marginRight: 10 }}>Learn More</span>
        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
        </Button>
        </Grid>
        <Grid item>
            <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
        </Grid>
        </Grid>
        </Grid> {/* End of custom software service block*/}
        <Grid item>{/*----Start iOS/Android service block---*/}
        <Grid container direction="row" justify={matchesSM ? "center" : "flex-end"} className={classes.serviceContainer}>
        <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
        <Typography variant="h4">
            iOS/Android App Development
        </Typography>
        <Typography variant="subtitle1">
            Extend Functionality. Extend Access. Increase Engagement. 
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
            Integrate your web experience or create a standalone app {matchesSM ? null : <br/>} with either mobile platform.
        </Typography>
        <Button 
        component={Link} 
        to="/mobileapps" 
        variant="outlined" 
        className={classes.learnButton}
        onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
        >
        <span style={{marginRight: 10 }}>Learn More</span>
        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
        </Button>
        </Grid>
        <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
            <img className={classes.icon} alt="mobile phone icon" src={mobileAppsIcon} />
        </Grid>
        </Grid>
        </Grid>{/*----End of iOS/Android service block---*/}
        <Grid item>{/*----Website service block---*/}
        <Grid container direction="row" justify={matchesSM ? "center" : undefined} className={classes.serviceContainer}>
        <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
        <Typography variant="h4">
            Website Development
        </Typography>
        <Typography variant="subtitle1">
            Reach More. Discover More. Sell More.
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
            Optimized for Search Engines, built for speed.
        </Typography>
        <Button
         component={Link} 
         to="/websites" 
         variant="outlined" 
         className={classes.learnButton}
         onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}
         >
        <span style={{marginRight: 10 }}>Learn More</span>
        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
        </Button>
        </Grid>
        <Grid item>
            <img className={classes.icon} alt="website icon" src={websitesIcon} />
        </Grid>
        </Grid>
        </Grid> {/* End of website service block*/}
        <Grid item>{/*----Start of revolution block---*/}
        <Grid container style={{height: "60em", marginTop: "12em" }} alignItems="center" justify="center">
        <Card className={classes.revolutionCard}>
        <CardContent>
        <Grid container direction="column" style={{textAlign: "center"}}>
        <Grid item>
        <Typography variant="h3" gutterBottom>
            The Revolution
        </Typography>
        </Grid >
        <Grid item>
        <Typography variant="subtitle1">
            Visionary insights coupled with cutting-edge technology is a recipe for revolution.
        </Typography>
        <Button
         component={Link} 
         to="/revolution" 
         variant="outlined" 
         className={classes.learnButtonHero}
         onClick={() => props.setValue(2)}
         >
                <span style={{marginRight: 10 }}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
        </Grid>
        </Grid>
        </CardContent>
        </Card>
        <div className={classes.revolutionBackground} />
        </Grid>
        </Grid>{/*----End of revolution block---*/}
        <Grid item>{/*----Start of information block---*/}
        <Grid container  alignItems="center" style={{height: "60em"}} direction="row">
        <Grid item container style={{
            position: "absolute", 
            textAlign: matchesXS ? "center": "inherit"}}
             direction={matchesXS ? "column" : "row"}
             /*spacing={matchesXS ? 10 : 0}*/
             >
        <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}>
        <Grid container /*style={{marginBottom: matchesXS ? : "5em": 0}}*/ direction="column">
            <Typography variant="h2" style={{color: "white"}}>
                About Us
            </Typography>
            <Typography variant="subtitle2">
                Let's get personal
            </Typography>
            <Grid item>
            <Button
             component={Link} 
             to="/about" 
             variant="outlined" 
             style={{color: "white", borderColor: "white"}} 
             className={classes.learnButton}
             onClick={() => props.setValue(3)}
             >
        <span style={{marginRight: 10 }}>Learn More</span>
        <ButtonArrow width={15} height={15} fill="white" />
        </Button>
        </Grid>
        </Grid>
        </Grid>
        <Grid item sm style={{
             marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
             textAlign: matchesXS ? "center" : "right" }}>
        <Grid container direction="column">
            <Typography variant="h2" style={{color: "white"}}>
                Contact Us
            </Typography>
            <Typography variant="subtitle2">
            Say hello! <span role="img" aria-label="waving hand">👋</span>
            </Typography>
            <Grid item>
            <Button
             component={Link} 
             to="/contact" 
             variant="outlined" 
             style={{color: "white", 
             borderColor: "white"}} 
             className={classes.learnButton}
             onClick={() => props.setValue(4)}
             >
        <span style={{marginRight: 10 }}>Learn More</span>
        <ButtonArrow width={15} height={15} fill="white" />
        </Button>
        </Grid>
        </Grid>
        </Grid> 
        </Grid>
        <div className={classes.infoBackground}  />
        </Grid>
        </Grid>{/*---End of information block---*/}
        <Grid item>{/*---Start of callToAction block---*/}
        <CallToAction setValue={props.setValue}/>
        </Grid>
        </Grid>
    );

}

export default LandingPage;