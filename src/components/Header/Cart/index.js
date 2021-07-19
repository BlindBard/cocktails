import React, { useState } from 'react';
import cartIcon from './cartIcon.png';
import styles from './styles.module.scss';
import { useCartContext } from '../../../context/cart';
import { Modal } from '../../Modal';

const Cart = () => {
  const { cart, removeFromCart, cleanCart } = useCartContext();
  const items = Object.values(cart);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => {
    if (items.length) setIsCartOpen(true);
    else alert('Please select cocktails first!');
  };
  const closeCart = () => setIsCartOpen(false);

  const handleSubmit = () => {
    console.log(items);
    cleanCart();
    closeCart();
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cart} onClick={openCart}>
        {items.length ? <span>{items.length}</span> : null}
        <img src={cartIcon} alt="" />
      </div>
      <Modal isOpen={isCartOpen} onClose={closeCart}>
        <ul className={styles.cartList}>
          {items.map((cocktail) => (
            <li className={styles.cartListRow} key={cocktail.id}>
              {cocktail.drink}{' '}
              <button
                className={styles.removeBtn}
                onClick={() => removeFromCart(cocktail.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <button className={styles.submitBtn} onClick={handleSubmit}>
          Submit
        </button>
      </Modal>
    </div>
  );
};

export default Cart;
