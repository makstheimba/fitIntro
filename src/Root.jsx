import React from 'react';
import PropTypes from 'prop-types';
import App from './components/App';
import { Provider } from 'react-redux';
import OnePage from './components/OnePage';
import TwoPage from './components/TwoPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route path="/one" component={OnePage} />
        <Route path="/one/two" component={TwoPage} />
      </div>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
