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
      <h1 style={{ color: '#fff' }}>
        Welcome back! Please login to your account.
      </h1>
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
              <Form style={{ width: 400 }}>
                <div className='p-fluid'>
                  <div className='p-field' style={{ marginBottom: 20 }}>
                    <FastField
                      name='username'
                      component={InputField}
                      label='Username'
                      placeholder='Username'
                    />
                  </div>
                  <div className='p-field' style={{ marginBottom: 20 }}>
                    <FastField
                      name='password'
                      component={PasswordField}
                      label='Password'
                      placeholder='Password'
                      feedback={false}
                    />
                  </div>
                </div>

                <div
                  className='p-fluid'
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                  <FastField
                    name='rememberMe'
                    component={CheckboxField}
                    label='Remember Me'
                    labelStyle={{ color: '#fff' }}
                  />
                  <Link
                    style={{
                      alignSelf: 'center',
                      color: '#fff',
                    }}
                    to='/auth/forget-password'>
                    Forget Password
                  </Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    style={{ alignSelf: 'center' }}
                    label='Login'
                    icon={isSubmitting ? 'pi pi-spin pi-spinner' : undefined}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
