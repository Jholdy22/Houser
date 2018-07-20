import React from 'react';

import Dashboard from './component/Dashboard/Dashboard.js';
import Wizard from './component/Wizard/Wizard';


import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
                <Route component={ Dashboard } path='/Dashboard'/>
                <Route component={ Wizard } path='/Wizard'/>
    </Switch>
)