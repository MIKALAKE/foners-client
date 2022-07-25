import PropTypes from 'prop-types';

const TextField = ({
  className,
  onChange,
  placeholder,
  required,
  type,
  value
}) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`rounded-md h-8 bg-white-600 text-center outline-secondary outline-offset-4 ${className}`}
      />
    </div>
  );
};

TextField.defaultProps = {
  className: '',
  onChange: () => {},
  placeholder: '',
  required: false,
  type: 'text',
  value: ''
};

TextField.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string
};

export default TextField;
