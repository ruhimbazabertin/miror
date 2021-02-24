import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar     from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden        from '@material-ui/core/Hidden';

import history     from '../assets/history.svg';
//import profile    from  '../assets/profile.jpg';
import comfirtable1 from '../assets/comfirtable1.jpg';
import comfirtable2 from '../assets/comfirtable2.jpg';
import CallToAction from  './ui/CallToAction';

const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")] : {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
            paddingTop: "1em",
        }
    },
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    avatar: {
        height: "25em",
        width: "25em",
        [theme.breakpoints.down("sm")]: {
         height: "20em",
         width: "20em",
         maxWidth: 300,
         maxHeight: 300,
        }
    }
}));

const About = (props) => {
    const classes = useStyles();
    const theme   = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Grid item container direction="column">
        <Grid
         item 
         className={classes.rowContainer} 
         style={{marginTop: matchesMD ? "1em" : "2em"}}
         >
            <Typography align={matchesMD ? "center" : undefined} variant="h2"> About Us </Typography>
        </Grid>
        <Grid item container 
            justify="center" 
            className={classes.rowContainer} 
            style={{marginTop: "2.5em"}}>
            <Typography variant="h4" align="center" className={classes.missionStatement}>
                Wether it be person to person, business to consumer, or an
                individual to their interests, technology is meant to bring us
                closer to what we care about in the best way possible.
                The Mirror Dev will use that principle to provide fast, modern,
                inexpensive, and aesthetic software to the ThousandHills and beyond.
             </Typography>
        </Grid>
        <Grid
         item 
         container 
         className={classes.rowContainer}
         style={{marginTop: "10em", marginBottom: "10em"}}
         justify="space-around"
         direction= {matchesMD ? "column" : "row"}
         alignItems={matchesMD ? "center" : undefined}>
        <Grid item>
        <Grid item container direction="column" lg
         style={{maxWidth: "35em"}}>
        <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>
                History
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="body1" paragraph
              align={matchesMD ? "center" : undefined}
              style={{fontWeight: 650, fontStyle: "italic"}}>
                  We're the new kid on the block
            </Typography>
            <Typography variant="body1" paragraph
                align={matchesMD ? "center" : undefined}>
                Founded in 2021, we're ready to get our hands on the world's
                business problems.
            </Typography>
            <Typography variant="body1" paragraph
                align={matchesMD ? "center" : undefined}>
                It all started with one question:Why are'nt all businesses using available
                technology? There are many different answers to that question:economic,
                barriers, social barriers, educational barriers, and sometimes institutional barriers.
            </Typography>
            <Typography variant="body1" paragraph
                align={matchesMD ? "center" : undefined}>
                We aim to be a powerful force in overcoming these obstacles. recent
                developments in software engineering and computing power, compounded
                by the proliferation of smart phones, has opened up infinite worlds
                of possibility. Things that have always been done by hand can now be 
                done digitally and automatically, and completely new methods of interaction
                are created daily. Taking fully advantage of these advancements is the name 
                of the game.
            </Typography>
            <Typography variant="body1" paragraph
               align={matchesMD ? "center" : undefined}>
                All this change can be alot to keep up with, and that's where
                we come in.
            </Typography>
        </Grid>
        </Grid>
        </Grid>
        <Grid item>
        <Grid item container justify="center" lg>
            <img src={history} alt="quill pen sitting on top of book"
                style={{maxHeight: matchesMD ? 200 : "22em"}} />
        </Grid>
        </Grid>
        </Grid>
        <Grid
         item 
         container 
         direction="column" 
         className={classes.rowContainerRowContainer}
         alignItems="center"
         style={{marginBottom: "15em"}}>
        <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
                Team
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="body1" align="center" paragraph>
                Ruhimbaza Bertin, Founder
            </Typography>
            <Typography variant="body1" align="center">
                Software Engineering is my Career.
            </Typography>
        </Grid>
        <Grid item>
            {/*<Avatar alt="founder" src={profile} className={classes.avatar} />*/}
        </Grid>
        <Grid item container justify={matchesMD ? "center" : undefined}>
        <Hidden lgUp>
        <Grid item lg
         style={{maxWidth: "54em", padding: "1.25em"}}>
            <Typography variant="body1" align="center" paragraph>
                Since I knew a new device created called computer,
                since then may passion has solely been set on learning-
                learning about computers, learning mathematics and phylosophy,
                styding software modeling design principles, always just learning.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Now I'am ready to apply everything I've learned, and
                to help others with the intuition I have developed.
            </Typography>
        </Grid>
        </Hidden>
        <Grid item container direction="column" lg
          alignItems={matchesMD ? "center" : undefined}
          style={{marginBottom: matchesMD ? "2em" : 0}}>
        <Grid item>
            <img src={comfirtable1} alt="comfirtable image about founder"
             style={{width: "25em", height: "20em", marginLeft: matchesMD ? 0 : "4em",
                    maxWidth: matchesMD ? 300 : undefined}} />
        </Grid>
        <Grid item>
            <Typography variant="caption">
                Comfirtable Environment
            </Typography>
        </Grid>
        </Grid>
        <Hidden mdDown>
        <Grid item lg
         style={{maxWidth: "54em", padding: "1.25em"}}>
            <Typography variant="body1" align="center" paragraph>
                Since I knew a new device created called computer,
                since then may passion has solely been set on learning-
                learning about computers, learning mathematics and phylosophy,
                styding software modeling design principles, always just learning.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Now I'am ready to apply everything I've learned, and
                to help others with the intuition I have developed.
            </Typography>
        </Grid>
        </Hidden>
        <Grid item container direction="column" lg
          alignItems={matchesMD ? "center" : undefined}>
        <Grid item>
           <img src={comfirtable2} alt="comfirtable image about founder"
             style={{width: "25em", height: "20em",
             maxWidth: matchesMD ? 300 : undefined}} />
        </Grid>
        <Grid item>
            <Typography variant="caption">
                Slow is Fast
            </Typography>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
        <Grid item>
        <CallToAction setValue={props.setValue} />
        </Grid>
        </Grid>
    )
}

export default About;