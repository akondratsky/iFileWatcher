import React from 'react';
import { Switch, Route } from 'react-router';

import Pages from 'Pages/common/Pages';
import JsonPage from 'Pages/JsonPage';

export default (
  <Switch>
    <Route exact path={Pages.Json} component={JsonPage} />
  </Switch>
);
