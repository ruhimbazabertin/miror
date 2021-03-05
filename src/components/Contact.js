import React, {useState} from 'react';
import axios  from 'axios';
import {Link} from 'react-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid   from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button     from '@material-ui/core/Button';
import TextField  from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog        from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar         from '@material-ui/core/Snackbar';

import ButtonArrow    from './ui/ButtonArrow';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon  from '../assets/phone.svg';
import emailIcon  from '../assets/email.svg';
import airplane   from '../assets/send.svg';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
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
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0,
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em",
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5,
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 225,
        }
    }
}));

const Contact = (props) => {

    const classes = useStyles();
    const theme   = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [emailHelper, setEmailHelper] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");

    const [message, setMessage] = useState("");

    const [open, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);
    const [alert, setAlert]     = useState({
        open: false, message: "", backgroundColor: ""
    });

    const onChange = event => {
        let valid;
        switch (event.target.id) {
            case 'email':
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                       .test(event.target.value)

                if(!valid){
                    setEmailHelper("invalid email")
                }else{
                    setEmailHelper("")
                }
                break;
            case 'phone':
                setPhone(event.target.value)
                valid = /^\(?([07]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
                       .test(event.target.value)

                if(!valid){
                    setPhoneHelper("Invalid phone")
                }else{
                    setPhoneHelper("")
                }
                break;
                default:
                    break;
        }
    };

   const  onConfirm = () => {
    setLoading(true);
     setTimeout(() =>{
           setLoading(false)
           setAlert({open: true, message: "Message sent successfully!",
                     backgroundColor: "#4BB543"})
           setName("")
           setEmail("")
           setPhone("")
           setMessage("")
        }, 5000);

    };

    const buttonContent = (
        <React.Fragment>
        Send Message
        <img src={airplane} alt="paper airplane"
         style={{marginLeft: "1em"}} /> 
         </React.Fragment>
    )
    

    return (
        <Grid item container direction="row">
        <Grid item container direction="column"
         justify="center" alignItems="center"
         style={{marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
                marginBottom: matchesMD ? "5em" : 0 }}
          lg={4}
          xl={3}>
        <Grid item>
            <Typography align={matchesMD ? "center" : undefined}
             variant="h2" style={{lineHeight: 1, marginRight: "3em"}}>Contact Us</Typography>
            <Typography variant="body1" align={matchesMD ? "center" : undefined}
              style={{color: theme.palette.common.blue, marginRight: "3em"}}>We're waiting.</Typography>
        </Grid>
        <Grid item container style={{marginTop: "2em"}}>
        <Grid item>
            <img src={phoneIcon} alt="phone" style={{marginRight: "0.5em"}} />
        </Grid>
        <Grid item>
            <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>
              <a href="tel:0786960926"
               style={{textDecoration : "none", color: "inherit"}}>  (+250) 786960926</a>
            </Typography>
        </Grid>
        </Grid>
        <Grid item container style={{marginBottom: "2em"}}>
        <Grid item>
            <img src={emailIcon} alt="envelop" style={{marginRight: "0.5em", verticalAlign: "bottom"}} />
        </Grid>
        <Grid item>
            <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1rem"}}>
               <a href="mailto:ruhimbazabertin@gmail.com"
                style={{textDecoration : "none", color: "inherit"}}> ruhimbazabertin@gmail.com </a>
            </Typography>
        </Grid> 
        </Grid>
        <Grid item container direction="column" style={{maxWidth: "20em"}}>
        <Grid item style={{marginBottom: "0.5em"}}>
            <TextField
             label="Name" 
             id="name"
            fullWidth
             value={name}
             onChange={(event) => setName(event.target.value)} />
        </Grid>
        <Grid item style={{marginBottom: "0.5em"}}>
            <TextField
             label="Email"
             error={emailHelper.length !== 0}
             helperText={emailHelper}
              id="email"
             fullWidth
             value={email}
             onChange={onChange} />
        </Grid>
        <Grid item style={{marginBottom: "0.5em"}}>
            <TextField
             label="Phone"
             error={phoneHelper.length !== 0}
             helperText={phoneHelper} 
             id="phone"
             fullWidth
             value={phone}
             onChange={onChange} />
        </Grid>
        </Grid>
        <Grid item style={{maxWidth: "20em"}}>
            <TextField id="message"
             fullWidth
             InputProps={{disableUnderline: true}}
             className={classes.message}
             multiline
             placeholder="Tell us more about..."
             rows={10}
             value={message}
             onChange={(event) => setMessage(event.target.value)} />
        </Grid>
        <Grid item container justify="center" style={{marginTop: "2em"}}>
            <Button
            disabled={
                 name.length === 0 ||
                 message.length === 0 ||
                 phoneHelper.length !== 0 ||
                 emailHelper.length !== 0 ||
                 email.length === 0 ||
                 phone.length === 0
                
            }
             variant="contained" 
             className={classes.sendButton}
             onClick={onConfirm}>
                {loading ? <CircularProgress/> : buttonContent}
            </Button>
        </Grid>
        </Grid>
        {/*Start of dialog component */}
        <Dialog
         style={{zIndex: 100}}
         fullScreen={matchesSM}
         open={open} onClose={()=> setOpen(false)}
         PaperProps={{
             style: {
                 paddingTop: matchesXS ? "1em" : 0,  
                 paddingBottom: matchesXS ? "1em" : "10em",
                 height: matchesXS ? 300 : 250
                 }
                 }}
                 >
        <DialogContent>
          <Grid item container direction="column">
            <Grid item>
                <Typography align="center" variant="h4" gutterBottom>
                    Confirm message
                 </Typography>
            </Grid>
            <Grid item style={{marginBottom: "0.5em"}}>
            <TextField
             label="Name" 
             id="name"
            fullWidth
             value={name}
             onChange={(event) => setName(event.target.value)} />
        </Grid>
        <Grid item style={{marginBottom: "0.5em"}}>
            <TextField
             label="Email"
             error={emailHelper.length !== 0}
             helperText={emailHelper}
              id="email"
             fullWidth
             value={email}
             onChange={onChange} />
        </Grid>
        <Grid item style={{marginBottom: "0.5em"}}>
            <TextField
             label="Phone"
             error={phoneHelper.length !== 0}
             helperText={phoneHelper} 
             id="phone"
             fullWidth
             value={phone}
             onChange={onChange} />
        </Grid>
        </Grid>
        <Grid item style={{maxWidth: matchesXS ? "100%" : "20em"}}>
            <TextField id="message"
             fullWidth
             InputProps={{disableUnderline: true}}
             className={classes.message}
             multiline
             rows={10}
             value={message}
             onChange={(event) => setMessage(event.target.value)} />
           </Grid>
           <Grid item container
             direction={matchesSM ? "column" : "row"}
            style={{marginTop: "2em"}}>
            <Grid item>
            <Button
             style={{fontWeight: 300}} color="primary" 
             onClick={()=> setOpen(false)}>Cancel</Button>
            </Grid>
            <Grid item>
            <Button
             disabled={
                 name.length === 0 ||
                 message.length === 0 ||
                 phoneHelper.length !== 0 ||
                 emailHelper.length !== 0 ||
                 email.length === 0 ||
                 phone.length === 0
                
             }
             variant="contained" 
             className={classes.sendButton}
             onClick={onConfirm}>
                {loading ? <CircularProgress size={30} /> : buttonContent} 
            </Button>
            </Grid>
            </Grid>
        </DialogContent>
        </Dialog>
        {/*End of Dialog component */}
        {/*Start of Snackbar component */}
        <Snackbar open={alert.open} message={alert.message}
                  ContentProps={{style:
                  {backgroundColor: alert.backgroundColor}}}
                  anchorOrigin={{vertical: "top", horizontal: "center"}}
                  onClose={() => setAlert({...alert, open: false})}
                  autoHideDuration={4000} />
        {/*End of SnackBar component */}
        <Grid item container
         direction={matchesMD ? "column" : "row"}
         className={classes.background}
         alignItems="center"
         justify={matchesMD ? "center" : undefined}
          lg={8}
          xl={9}>
        <Grid item style={{ marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center": "inherit"}}>
            <Grid container direction="column">
            <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
                 Simple Software. <br/> Revolutionary Results.
            <Typography align={matchesMD ? "center" : undefined} variant="subtitle2" style={{fontSize: "1.5rem"}}>
                Take advantage of the 21st Centary.
            </Typography> 
            </Typography>
            <Grid container justify={matchesMD ? "center" : undefined} item>
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
        </Grid>
    )
}

export default Contact;