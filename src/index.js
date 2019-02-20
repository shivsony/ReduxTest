import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from "./store";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import history from "./history";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
