import 'typeface-roboto';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import routes from './routes';
import configureStore from './store';
import CssBaseLine from '@material-ui/core/CssBaseline';
import MainMenu from 'Components/MainMenu';

const syncHistoryWithStore = (store, history) => {
  const { router } = store.getState();
  if (router && router.location) {
    history.replace(router.location);
  }
};

const initialState = {};
const routerHistory = createMemoryHistory();

const store = configureStore(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <CssBaseLine />
    <MainMenu>
      <ConnectedRouter history={routerHistory}>{routes}</ConnectedRouter>
    </MainMenu>
  </Provider>,
  rootElement,
);
