import { Container, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head';
import Header from '../components/Header'
import Footer from '../components/Footer'

const useStyles = makeStyles({
    header: {
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
                <header className={classes.header}><Header /></header>
                <Container maxWidth="sm">{children}</Container>
                <footer className={classes.footer}><Footer /></footer>
            </main>
         </React.Fragment>
    )}
