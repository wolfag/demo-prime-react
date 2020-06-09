import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/form';
import { login } from '../../slice';
import { useDispatch } from 'react-redux';
import { Card } from 'primereact/card';

MainPage.propTypes = {};

function MainPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log({ value });
        const action = login(value);
        dispatch(action);

        resolve(true);
      }, 3000);
    });
  };
  return (
    <Card>
      <LoginForm onSubmit={handleSubmit} />
    </Card>
  );
}

export default MainPage;
