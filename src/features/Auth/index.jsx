import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { NotFound } from '../../components';

Logo.propTypes = {};

function Logo(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Logo;
