import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div id="products-list">
      {products.length > 0 ? (
        products.map((product) => (
          <Product category={product.category} title={product.title}  thumbnail={product.thumbnail} key={product.id} />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductList;
