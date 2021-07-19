import React from 'react';
import { useCartContext } from '../../context/cart';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './styles.module.scss';

const CoctailItem = ({
  cocktail,
  pageItem,
  pageWrapper,
  pageInfo,
  pageBtn,
  shouldBeALink = true,
  shouldBeRenderInstructions = false,
  shouldRenderIngredients = false,
}) => {
  const { id, category, drink, drinkThumb, instructions, ingredients } =
    cocktail;
  const { addToCart } = useCartContext();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(cocktail);
  };

  const content = (
    <div className={cn(styles.wrapper, pageWrapper)}>
      <div className={styles.poster}>
        <img src={drinkThumb} alt="" />
      </div>
      <div className={cn(styles.cocktailInfo, pageInfo)}>
        <h3 className={styles.title}>{drink}</h3>
        <div className={styles.categoryRow}>
          <h4 className={styles.categoryHeading}>Category:</h4>
          <span className={styles.categoryValue}>{category}</span>
        </div>
        {shouldBeRenderInstructions && (
          <div className={styles.instructions}>
            <p className={styles.instructionsInner}>{instructions}</p>
          </div>
        )}
        {shouldRenderIngredients && (
          <ul className={styles.ingredients}>
            <h4 className={styles.ingredientsHeading}>Ingredients:</h4>
            {ingredients.map((ingredient, idx) => (
              <li className={styles.ingredientsItem} key={idx}>
                {ingredient}
              </li>
            ))}
          </ul>
        )}
        <button className={cn(styles.btn, pageBtn)} onClick={handleAddToCart}>
          Order
        </button>
      </div>
    </div>
  );

  return shouldBeALink ? (
    <Link to={`/cocktail/${id}`} className={cn(styles.cocktailItem, pageItem)}>
      {content}
    </Link>
  ) : (
    <div className={cn(styles.cocktailItem, pageItem)}>{content}</div>
  );
};

export default CoctailItem;
