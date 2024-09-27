import Filters from "../components/Filters";
import ProductList from "../components/Products/ProductList";
import AllProducts from "../store/AllProducts";
import { useState } from "react";

const Home = () => {
  const filters = [...new Set(AllProducts.map((p) => p.category))];
  const [currentFilter, setCurrentFilter] = useState(undefined);
  return (
    <div className="container">
      <Filters filters={filters} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
      <ProductList
        products={AllProducts.filter((p) =>
          currentFilter ? p.category == currentFilter : true
        )}
      />
    </div>
  );
};

export default Home;
