import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

import { AppState, Product } from "../../misc/type";
import {
  addToFav,
  removeFromProductList,
} from "../../redux/slices/productSlice";

export default function ProductItem({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const favList = useSelector((state: AppState) => state.products.favList);

  //function for adding product to favList
  function addFavHandler() {
    dispatch(addToFav(product));
  }
  const isAlreadyAddedToFav = favList.some(
    (favProduct) => favProduct.id === product.id
  );

  //remove from ProductList
  const handleRemoveProduct = () => {
    dispatch(removeFromProductList(product.id));
  };

  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant="h4">
        {product.name}
      </Typography>
      <Button variant="contained" sx={{ mr: 2 }} onClick={handleRemoveProduct}>
        Remove Product
      </Button>
      {isAlreadyAddedToFav ? (
        <Button variant="outlined" disabled>
          Already in Favorites
        </Button>
      ) : (
        <Button variant="contained" onClick={addFavHandler}>
          Add to Favorites
        </Button>
      )}
    </Box>
  );
}
