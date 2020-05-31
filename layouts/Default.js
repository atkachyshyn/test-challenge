import { Container, CssBaseline, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head';
import Header from '../components/Header'
import Footer from '../components/Footer'

const useStyles = makeStyles({
    header: {
        height: '100%'
    },
    main: {
        padding: '2rem'
    },
    footer: {
    }
});

export default ({ children }) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Head>
                <title>Simple online market</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <main>
                <header className={classes.header}><Header /><Toolbar /></header>
                <Container className={classes.main} maxWidth="lg">{children}</Container>
                <footer className={classes.footer}><Footer /></footer>
            </main>
         </React.Fragment>
    )}
