import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import CocktailPage from './pages/Cocktail';
import CartContext from './context/cart';
import SearchContext from './context/search';
import { searchCocktailsByName, searchCocktailsByFirstLetter } from './api';
import { ModalPortal, ModalPortalContext } from './components/Modal';

const App = () => {
  const [cart, setCart] = useState({});
  const addToCart = (cocktail) => setCart({ ...cart, [cocktail.id]: cocktail });
  const removeFromCart = (id) => {
    const newCart = { ...cart };
    delete newCart[id];
    setCart(newCart);
  };
  const cleanCart = () => {
    setCart({});
  };
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchByName = async (name) => {
    setSearchResults([]);
    const results = await searchCocktailsByName(name);
    setSearchResults(results);
  };
  const handleSearchByFirstLetter = async (letter) => {
    setSearchResults([]);

    const results = await searchCocktailsByFirstLetter(letter);
    setSearchResults(results);
  };

  const [modalPortal, setModalPortal] = useState(null);
  return (
    <ModalPortalContext.Provider value={modalPortal}>
      <SearchContext.Provider value={searchResults}>
        <CartContext.Provider
          value={{ cart, addToCart, removeFromCart, cleanCart }}
        >
          <Router>
            <Header onSearchByName={handleSearchByName} />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/cocktail/:id" component={CocktailPage} />
              <Redirect to="/" />
            </Switch>
            <Footer onSearchByFirstLetter={handleSearchByFirstLetter} />
          </Router>
          <ModalPortal setRef={setModalPortal} />
        </CartContext.Provider>
      </SearchContext.Provider>
    </ModalPortalContext.Provider>
  );
};

export default App;
