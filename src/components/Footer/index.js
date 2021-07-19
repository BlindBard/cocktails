import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss';

const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Footer = ({ onSearchByFirstLetter }) => {
  const history = useHistory();
  const handleSearch = (letter) => {
    onSearchByFirstLetter(letter);
    history.push('/search');
  };

  return (
    <div className={styles.footer}>
      <div className={styles.lettersContainer}>
        {abc.map((letter) => (
          <div className={styles.letterItem} key={letter}>
            <span role="button" onClick={() => handleSearch(letter)}>
              {letter.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
