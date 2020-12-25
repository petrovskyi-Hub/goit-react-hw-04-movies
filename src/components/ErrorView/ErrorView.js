import PropTypes from 'prop-types';
import s from './ErrorView.module.css';

function ErrorView({ message }) {
  return (
    <div role="alert" className={s.wrapper}>
      <p text={message} className={s.text}>
        {message}
      </p>
    </div>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorView;
