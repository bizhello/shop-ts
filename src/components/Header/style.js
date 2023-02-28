import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1,
    },
    loginButton: {
      margin: '0 30px'
    },
    logoutButton: {
      marginLeft: '30px'
    },
    href: {
      textDecoration: 'none',
      color: 'white',
    }
  }))

export default useStyles;