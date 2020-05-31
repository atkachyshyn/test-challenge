import Link from 'next/link'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { ShoppingBasket } from '@material-ui/icons'
import { useSelector } from 'react-redux'

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
      "& a": {
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'inherit'
      }
    },
}))

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
  
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
  

const Header = (props) => {
    const classes = useStyles();

    const busketItems = useSelector(state => state.busket)

    return (
        <ElevationScroll>
        <AppBar>
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    <Link href='/'>
                        <a>Simple online market</a>
                    </Link>
                </Typography>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <IconButton edge="end" aria-label={`show ${Object.keys(busketItems).length} busket items`} color="inherit">
                    <Badge badgeContent={Object.keys(busketItems).length} color="secondary">
                        <Link href='/busket'><ShoppingBasket /></Link>
                    </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar></ElevationScroll>
    )
}

export default Header