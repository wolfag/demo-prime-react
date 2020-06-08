import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'primereact/checkbox';

CheckboxField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

CheckboxField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function CheckboxField(props) {
  const {
    field: { name, value, onChange },
    form: { errors, touched },
    label,
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
      <Checkbox
        checked={value}
        id={name}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={name} className='p-checkbox-label'>
        {label}
      </label>
    </div>
  );
}

export default CheckboxField;
