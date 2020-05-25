import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ShoppingBasket } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
  

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
            >
                <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
                Simple online market
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <IconButton edge="end" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <ShoppingBasket />
                </Badge>
                </IconButton>
            </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header