import { useState } from "react";
import "./App.css";
import { Filters, ProductTable } from "./components";
import { FilterObj } from "./components/filters/filters";
import AppContext from "./context/appContext";
import { products } from "./utils";

function App() {
  const [filter, setFilter] = useState<FilterObj>({} as FilterObj);

  const filtered = () => {
    const clone = [...products];
    if (filter.genre && filter.month)
      return clone.filter(
        (prod) => prod.genre === filter.genre && prod.month === filter.month
      );
    if (filter.genre)
      return clone.filter((prod) => prod.genre === filter.genre);
    if (filter.month)
      return clone.filter((prod) => prod.month === filter.month);
    return products;
  };

  return (
    <AppContext.Provider value={{ filter, setFilter }}>
      <div className="cont">
        <h1>Demo Project - Multiple Filters</h1>
        <h2>@codeit.harvel</h2>
        <Filters />
        <ProductTable products={filtered()} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
