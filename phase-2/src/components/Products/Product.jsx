import React from "react";

const ProductList = ({ category,  title, thumbnail}) => {
  return (
    <div className="product">
                <div className="top"><span className="badge"{{category}}</span></div>
                <div className="body" style="background-image: url('${p.thumbnail}');"></div>
                <div className="footer"><span>{{title}}</span></div>
            </div>
  );
};

export default ProductList;