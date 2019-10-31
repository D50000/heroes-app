import { HashRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Heroes from "./Heroes";
import ProfileContainer from "./ProfileContainer";
import HeroProfile from "./HeroProfile";
import NotFound from "./NotFound";

// Stateless Functional Components
const RouterConfig = () => (
    <Router basename='/'>
        <Route path="/heroes" component={Heroes} />
        <Switch>
            <Route path="/heroes/:heroId" component={HeroProfile} />
            <Route path="/heroes" component={ProfileContainer} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default RouterConfig;