import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

import {
  decrement,
  increment,
  increseByAmount,
} from "../redux/slices/counterSlice";
import { AppState } from "../misc/type";

const Counter = () => {
  const count = useSelector((state: AppState) => state.counter.counterValue);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decremantHandler = () => {
    dispatch(decrement());
  };

  const increaseHandler = () => {
    dispatch(increseByAmount(5));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Typography variant="h3">Redux Counter</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button variant="contained" sx={{ mr: 2 }} onClick={incrementHandler}>
          +
        </Button>
        <Typography variant="h5">{count}</Typography>
        <Button variant="contained" sx={{ ml: 2 }} onClick={decremantHandler}>
          -
        </Button>
        <Button variant="contained" sx={{ ml: 2 }} onClick={increaseHandler}>
          Increase by 5
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
