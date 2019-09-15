import React from 'react';
import { Switch, Route } from 'react-router';

import Pages from 'Pages/common/Pages';
import JsonPage from 'Pages/JsonPage';
import ConsolePage from 'Pages/ConsolePage';

export default (
  <Switch>
    <Route exact path={Pages.Json} component={JsonPage} />
    <Route exact path={Pages.Console} component={ConsolePage} />
  </Switch>
);
