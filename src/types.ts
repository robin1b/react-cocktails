// types.ts

export interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface CocktailAPIResponse {
  drinks: Cocktail[];
}
