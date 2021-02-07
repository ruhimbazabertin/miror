import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createMuiTheme({
    pilette: {
        common: {
            Blue: `${arcBlue}`,
            Orange: `${arcOrange}` 
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },
      //check again here, may be something went wrong
        typography: {
            tab: {
            fontFamily: "Raleway", 
            fontWeight: 700,
            fontSize: "1rem"
            },
        }
    }
});