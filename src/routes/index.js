import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import { history } from '../redux/store';
import AllStories from '../containers/AllStories';

const Routes = (props) => {
    return (
        <ConnectedRouter history={ history }>
            <>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/stories" component={ AllStories } />
                    <Route path="/jobs" component={ AllStories } />
                </Switch>
            </>
        </ConnectedRouter>
    );
};

export default Routes;
