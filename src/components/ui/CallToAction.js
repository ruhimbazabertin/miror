import React from 'react';
import Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link }  from 'react-router-dom';
import Button  from '@material-ui/core/Button';
import usedMediaQuery from '@material-ui/core/useMediaQuery';


import ButtonArrow from '../ui/ButtonArrow';
import background  from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em",
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "50em",
        width: "100%",
        [theme.breakpoints.down("md")] : {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit",
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius:  50,
        height: 50,
        width: 140,
        backgroundColor: theme.palette.common.orange,
        marginRight: "2em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginRight: 0,
        }
    }
}))

const CallToAction = (props) => {
    const classes = useStyles();
    const theme  = useTheme();
    const matchesSM = usedMediaQuery(theme.breakpoints.down("sm"));

    return <Grid container 
             alignItems="center"
            justify={matchesSM ? "center":"space-between"}
             className={classes.background}
             direction={matchesSM ? "column" : "row"}>
            <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center": "inherit"}}>
            <Grid container direction="column">
            <Grid item>
            <Typography variant="h2">
                 Simple Software. <br/> Revolutionary Results.
            <Typography variant="subtitle2" style={{fontSize: "1.5rem"}}>
                Take advantage of the 21st Centary.
            </Typography> 
            </Typography>
            <Grid container justify={matchesSM ? "center" : undefined} item>
            <Button
             component={Link} 
             to="/revolution"  
             variant="outlined" 
             className={classes.learnButton}
             onClick={() => props.setValue(2)}>
            <span style={{marginRight: 5 }}>Learn More</span>
            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
            <Grid item>
            <Button
             component={Link} 
             to="/estimate" 
             variant="contained" 
             className={classes.estimateButton}
             onClick={() => props.setValue(5)}
             >
                Free Estimate
            </Button>
            </Grid>

            </Grid>
}

export default CallToAction;