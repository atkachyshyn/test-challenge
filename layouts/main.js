export default ({ children }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
            {children}
            </Container>
         </React.Fragment>
    )}
