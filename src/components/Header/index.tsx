import { FC } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import Icon from '@mui/material/Icon';
import { IHeader } from './interfaces';
import useStyles from './style';

const Header: FC<IHeader> = ({ children }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <Icon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            SHOP FAMILY
          </Typography>
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
