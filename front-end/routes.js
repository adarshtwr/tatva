import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import PrivateRoute from "./middleware/private_route"
import Login from "./containers/login"
import Listing from "./containers/listing"

export default class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const theme = createMuiTheme({});
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path={["/", "/login"]} component={Login} />
                        <Route exact path={"/listing"} component={Listing} />
                    </Switch>
                </Router>
            </ThemeProvider>
        )
    }
}