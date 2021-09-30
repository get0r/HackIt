import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import { history } from '../redux/store';

const Routes = (props) => {
    return (
        <ConnectedRouter history={ history }>
            <>
                <Switch>
                    <Route exact path="/" component={ Home } />
                </Switch>
            </>
        </ConnectedRouter>
    );
};

export default Routes;
