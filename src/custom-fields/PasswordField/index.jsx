import React from 'react';
import PropTypes from 'prop-types';
import { Password } from 'primereact/password';

PasswordField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

PasswordField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function PasswordField(props) {
  const {
    field,
    field: { name },
    form: { errors, touched },
    type,
    label,
    placeholder,
    disabled,
    ...rest
  } = props;
  const showError = errors[name] && touched[name];

  return (
    <Password
      {...field}
      id={name}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      {...rest}
    />
  );
}

export default PasswordField;
