import RactLoader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

function Loader() {
  return (
    <div className={s.overlay}>
      <RactLoader
        type="Grid"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={0}
      />
    </div>
  );
}

export default Loader;
