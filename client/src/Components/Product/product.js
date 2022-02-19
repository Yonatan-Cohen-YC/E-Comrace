import React from "react";
import { Link } from "react-router-dom";
import * as Tag from "./product.elements";

function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function Product({ product }) {
  return (
    <React.Fragment>
      <Tag.Product key={product._id}>
        <Tag.ProductImage background={product.productImage}>
          {/* <Tag.Img src={product.productImage} /> */}
        </Tag.ProductImage>
        <Tag.ProductDetail>
          <Tag.ProductName>{product.productName}</Tag.ProductName>
          <Tag.ProductDesc>
            Lorem ipsPum dolor sit amet consectetur adipisicing elit. Enim, est
            deleniti impedit necessitatibus illum tempora deserunt libero
            dolores maiores ullam!
          </Tag.ProductDesc>
          <Tag.ProductButtons>
            <Tag.ProductPrice>
              {currencyFormat(Number(product.productPrice))}
            </Tag.ProductPrice>
            <Link
              style={{ textDecoration: "none" }}
              to={`product/${product._id}`}
            >
              <Tag.ProductButton>Watch Now</Tag.ProductButton>
            </Link>
          </Tag.ProductButtons>
        </Tag.ProductDetail>
      </Tag.Product>
    </React.Fragment>
  );
}

export default Product;
