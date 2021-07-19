import logo from './logo.svg';
import Search from './Search';
import Cart from './Cart';
import styles from './styles.module.scss';
import { useHistory } from 'react-router-dom';

const Header = ({ onSearchByName }) => {
  const history = useHistory();

  const goToHome = () => history.push('/');
  const handleSearchByName = (name) => {
    onSearchByName(name);
    history.push('/search');
  };
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo} onClick={goToHome}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.rightSide}>
          <Search onSearchByName={handleSearchByName} />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Header;
