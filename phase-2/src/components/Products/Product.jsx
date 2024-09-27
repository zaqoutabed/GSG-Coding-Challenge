const Product = ({ category, title, thumbnail }) => {
  return (
    <div className="product">
      <div className="top"><span className="badge">{category}</span></div>
      <div
        className="body"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      ></div>
      <div className="footer">{title}</div>
    </div>
  );
};

export default Product;
