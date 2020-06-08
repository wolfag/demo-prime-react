import React from 'react';
import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Button } from 'primereact/button';

import {
  InputField,
  CheckboxField,
  PasswordField,
} from '../../../../custom-fields';
import { Link } from 'react-router-dom';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
LoginForm.defaultProps = {
  onSubmit: null,
};

function LoginForm(props) {
  const { onSubmit } = props;
  const initValues = { username: '', password: '', rememberMe: false };

  const validationSchema = yup.object().shape({
    username: yup.string().required('This field is required.'),
    password: yup.string().required('This field is required.'),
    rememberMe: yup.bool(),
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <h1>Welcome back! Please login to your account.</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Formik
          validationSchema={validationSchema}
          initialValues={initValues}
          onSubmit={onSubmit}>
          {(formikProps) => {
            const { values, errors, touched, isSubmitting } = formikProps;
            console.log({ values, errors, touched, isSubmitting });
            return (
              <Form>
                <div className='p-fluid'>
                  <div className='p-field'>
                    <FastField
                      name='username'
                      component={InputField}
                      label='Username'
                      placeholder='Username'
                    />
                  </div>
                  <div className='p-field'>
                    <FastField
                      name='password'
                      component={PasswordField}
                      label='Password'
                      placeholder='Password'
                    />
                  </div>
                </div>

                <div className='p-fluid p-formgrid p-grid'>
                  <div className='p-field p-col'>
                    <FastField
                      name='rememberMe'
                      component={CheckboxField}
                      label='Remember Me'
                    />
                  </div>
                  <div className='p-field p-col'>
                    <Link to='/auth/forget-password'>Forget Password</Link>
                  </div>
                </div>

                <Button
                  label='Login'
                  icon={isSubmitting ? 'pi pi-spin pi-spinner' : undefined}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
