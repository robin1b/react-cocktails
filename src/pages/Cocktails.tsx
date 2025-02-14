import useSWR from "swr";
import { fetcher, slugit } from "../helpers";
import { Link } from "react-router";
import { CocktailAPIResponse } from "../types";

const Cocktails = () => {
  const {
    data: cocktails,
    isLoading,
    error,
  } = useSWR<CocktailAPIResponse>(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin",
    fetcher
  );

  return (
    <>
      <h1>Cocktails</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{String(error)}</p>}
      <ul className="products">
        {cocktails?.drinks?.map((drink) => (
          <li key={drink.idDrink}>
            <Link to={`/cocktails/${drink.idDrink}/${slugit(drink.strDrink)}`}>
              <div>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              </div>
              <p>{drink.strDrink}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cocktails;
