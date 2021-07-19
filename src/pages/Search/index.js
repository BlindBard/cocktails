import React from 'react';
import Wrapper from '../../components/Wrapper';
import CocktailItem from '../../components/CocktailItem';
import { useSearchContext } from '../../context/search';
import styles from './styles.module.scss';

const SearchPage = () => {
  const cocktails = useSearchContext();

  return (
    <section className={styles.search}>
      <Wrapper>
        <div className={styles.wrapper}>
          {!cocktails.length && <div>Nothing found!</div>}
          {cocktails.map((cocktail) => (
            <CocktailItem
              pageItem={styles.pageItem}
              pageWrapper={styles.pageWrapper}
              pageInfo={styles.pageInfo}
              pageBtn={styles.pageBtn}
              key={cocktail.id}
              cocktail={cocktail}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default SearchPage;
