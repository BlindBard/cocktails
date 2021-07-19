const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

const normalizeDrink = (drink) => ({
  id: drink.idDrink,
  drink: drink.strDrink,
  category: drink.strCategory,
  drinkThumb: drink.strDrinkThumb,
  instructions: drink.strInstructions,
  ingredients: [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
    drink.strIngredient11,
    drink.strIngredient12,
    drink.strIngredient13,
    drink.strIngredient14,
    drink.strIngredient15,
  ].filter((x) => !!x),
});

export const fetchCocktailsByName = async (name) => {
  try {
    const res = await fetch(`${apiUrl}/search.php?s=${name}`, {
      method: 'GET',
    });
    if (!res.ok) throw new Error();

    const parsedResult = await res.json();

    return {
      cocktails: parsedResult,
    };
  } catch (e) {
    return null;
  }
};

export const fetchRandomCocktail = async () => {
  try {
    const res = await fetch(`${apiUrl}/random.php`, {
      method: 'GET',
    });
    if (!res.ok) throw new Error();

    const parsedResponse = await res.json();

    return normalizeDrink(parsedResponse.drinks[0]);
  } catch (e) {
    return null;
  }
};

export const searchCocktailsByName = async (query) => {
  try {
    const res = await fetch(`${apiUrl}/search.php?s=${query}`, {
      method: 'GET',
    });
    if (!res.ok) throw new Error();

    const parsedResult = await res.json();
    const drinks = parsedResult.drinks || [];
    return drinks.map(normalizeDrink);
  } catch (e) {
    return null;
  }
};

export const searchCocktailsByFirstLetter = async (letter) => {
  try {
    const res = await fetch(`${apiUrl}/search.php?f=${letter}`, {
      method: 'GET',
    });
    if (!res.ok) throw new Error();

    const parsedResult = await res.json();
    const drinks = parsedResult.drinks || [];

    return drinks.map(normalizeDrink);
  } catch (e) {
    return null;
  }
};

export const fetchCocktailById = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/lookup.php?i=${id}`, {
      method: 'GET',
    });
    if (!res.ok) throw new Error();

    const { drinks } = await res.json();
    const cocktail = drinks ? drinks[0] : null;
    if (!cocktail) return null;
    else return normalizeDrink(cocktail);
  } catch (e) {
    return null;
  }
};
