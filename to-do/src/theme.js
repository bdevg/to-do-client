  
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import 'fontsource-roboto';
// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#8e24aa',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    menu:{
        main:"#8e24aa"
    }
  },
});

export default theme;