import { BrowserRouter, Route, Switch, IndexRoute, hashHistory } from 'react-router-dom';
import React from "react";
import Heroes from './Heroes';
import NotFound from "./NotFound.js";

// Stateless Functional Components
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/heroes" component={Heroes}>
                {/* <IndexRoute component={HeroProfile} /> */}
            </Route>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;