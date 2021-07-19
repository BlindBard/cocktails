import React, { useState, useEffect } from 'react';
import { fetchRandomCocktail } from '../../api';
import CoctailItem from '../../components/CocktailItem';
import Wrapper from '../../components/Wrapper';
import styles from './styles.module.scss';

const Home = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    fetchRandomCocktail().then((cocktail) => setRandomCocktail(cocktail));
  }, []);

  return (
    <section className={styles.home}>
      <Wrapper>
        <div className={styles.tip}>
          <p>Use the search or filter to select a cocktail.</p>
        </div>
        {randomCocktail ? (
          <div className={styles.label}>
            <div className={styles.promo}>
              <span>Personal</span> <span>recommendation</span>
            </div>
            <CoctailItem
              cocktail={randomCocktail}
              shouldBeALink={false}
              shouldBeRenderInstructions={false}
              shouldRenderIngredients
            />
          </div>
        ) : null}
      </Wrapper>
    </section>
  );
};

export default Home;
