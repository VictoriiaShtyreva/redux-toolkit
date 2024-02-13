import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

import { AppState } from "../../misc/type";
import { removeFromFav } from "../../redux/slices/productSlice";
import ProductItem from "./ProductItem";

export default function Product() {
  const result = useSelector((state: AppState) => state.products.products);
  const favList = useSelector((state: AppState) => state.products.favList);
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      <Typography variant="h4">Products</Typography>
      <List>
        {result.map((product) => (
          <ListItem disablePadding key={product.id} sx={{ py: 1 }}>
            <ProductItem product={product} />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5">Favorites</Typography>
      <List sx={{ display: "flex", maxWidth: "50vw" }}>
        {favList.map((product) => (
          <ListItem disablePadding key={product.id}>
            <ListItemText primary={product.name} />
            <Button onClick={() => dispatch(removeFromFav(product.id))}>
              Remove from Favorites
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
