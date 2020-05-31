import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../themes/theme'
import { END } from 'redux-saga'
import { wrapper } from '../store/store'

const Noop = ({ children }) => children

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const Layout = Component.Layout || Noop

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async ({Component, ctx}) => {
    const pageProps = {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      }
  
      if (ctx.req) {
        ctx.store.dispatch(END)
        await ctx.store.sagaTask.toPromise()
      }
  
      return { pageProps }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp)