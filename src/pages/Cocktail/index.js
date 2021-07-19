import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCocktailById } from '../../api';
import Wrapper from '../../components/Wrapper';
import CocktailItem from '../../components/CocktailItem';
import styles from './styles.module.scss';

const Cocktail = () => {
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchCocktailById(id).then((cocktail) => setCocktail(cocktail));
  }, [id]);

  if (!cocktail) return <p>Loading...</p>;
  return (
    <section className={styles.cocktail}>
      <Wrapper>
        <CocktailItem
          shouldBeALink={false}
          shouldRenderIngredients
          shouldBeRenderInstructions={true}
          cocktail={cocktail}
        />
      </Wrapper>
    </section>
  );
};

export default Cocktail;
