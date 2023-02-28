import { Button } from '@mui/material';
import Header from './Header';

const HeaderIsAuth = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handelLogout = async () => {
    try {
      //   await authService.logout();
      //   navigate('../shop-family/sign-in');
      //   localStorage.clear('accessToken');
      //   localStorage.clear('userId');
      console.log('ВЫХОД');
    } catch (e) {
      console.log('Ошибка выхода', e);
    }
  };

  return (
    <Header>
      <Button
        className={classes.logoutButton}
        color="secondary"
        variant="contained"
        onClick={() => handelLogout()}
      >
        Logout
      </Button>
    </Header>
  );
};

export default HeaderIsAuth;
