import { Button, Grid } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ProductCard = ({ product }) => {
  console.log("product.rating-> ", product.rating);
  return (
    <div className="productCardStyles">
      <Grid container>
        <Grid item xs={4} className="imageGrid" paddingRight={2}>
          <img
            className="productImage"
            src={product.image_urls.x408}
            alt="productImg"
          />
        </Grid>
        <Grid item xs={8} className="productDetailGrid" paddingLeft={2}>
          <p className="productName">{product.name}</p>
          <p className="productWeight">
            ({`${product.weight} ${product.weight_unit}`})
          </p>
          {product.rating !== undefined && (
            <Stack spacing={1}>
              <Rating defaultValue={product.rating} precision={0.1} readOnly />
            </Stack>
          )}

          <h3 className="productPrice">₹ {product.final_price}</h3>
          <Button variant="contained" className="addToCartBtn">
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductCard;
