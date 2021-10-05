import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import { history } from '../redux/store';
import AllStories from '../containers/AllStories';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer';

const Routes = (props) => {
    return (
        <ConnectedRouter history={ history }>
            <>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/stories" component={ AllStories } />
                    <Route path="/jobs" component={ AllStories } />
                </Switch>
                <Footer />
            </>
        </ConnectedRouter>
    );
};

export default Routes;
