import React from 'react';
import PropTypes from 'prop-types';
import { InputText } from 'primereact/inputtext';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function InputField(props) {
  const {
    field,
    field: { name },
    form: { errors, touched },
    type,
    label,
    placeholder,
    disabled,
  } = props;
  const showError = errors[name] && touched[name];

  return (
    <div
      style={{
        padding: 5,
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 1,
      }}>
      <InputText
        {...field}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
    </div>
  );
}

export default InputField;
