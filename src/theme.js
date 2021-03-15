import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  icon: {
    fontSize: '40px',
    top: '2px',
    '@media (max-width: 900px)': {
      fontSize: '35px',
    },
    fill: 'white',
    zIndex: '99999',
    '&:hover': {
      transition: 'all 200ms ease-in',
      fill: '#D32AA2',
    },
  },
});
export default theme;
