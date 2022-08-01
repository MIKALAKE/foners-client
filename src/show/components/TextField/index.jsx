import PropTypes from 'prop-types';

const TextField = ({
  className,
  label,
  onChange,
  placeholder,
  required,
  type,
  value
}) => {
  return (
    <div className='flex w-full'>
      {label && <label className='flex w-1/3 justify-start'>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`rounded-md h-8 w-4/5 bg-white-600 text-center outline-secondary outline-offset-4 ${className}`}
      />
    </div>
  );
};

TextField.defaultProps = {
  className: '',
  label: '',
  onChange: () => {},
  placeholder: '',
  required: false,
  type: '',
  value: ''
};

TextField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default TextField;
