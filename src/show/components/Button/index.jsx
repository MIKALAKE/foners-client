import PropTypes from 'prop-types';

const Button = ({
  className,
  iconLeft,
  iconRight,
  label,
  onClick,
  variant
}) => {
  const buttonColor = {
    primary:
      'bg-secondary w-1/2 h-10 my-2 rounded-full text-white font-bold items-center justify-center ml-5 hover:outline outline-white outline-4',
    secondary:
      'bg-charade w-1/2 h-10 my-2 rounded-full text-white font-bold items-center justify-center ml-5 hover:outline outline-white outline-4'
  };

  return (
    <button
      className={`flex ${buttonColor[variant]} ${className}`}
      onClick={onClick}>
      {iconLeft}
      {iconRight}
      {label}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  iconLeft: undefined,
  iconRight: undefined,
  label: '',
  onClick: () => {},
  variant: 'primary'
};

Button.propTypes = {
  className: PropTypes.string,
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any,
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
};

export default Button;
