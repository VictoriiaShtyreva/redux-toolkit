import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Product from "./components/products/Product";
import Header from "./components/Header";
import Authorisation from "./components/Authorisation";
import { AppState } from "./misc/type";
import UserProfile from "./components/UserProfile";

function App() {
  const isUserAuth = useSelector(
    (state: AppState) => state.authentication.isAuthenticated
  );

  return (
    <>
      <Header />
      {!isUserAuth && <Authorisation />}
      {isUserAuth && <UserProfile />}
      <Product />
      <Counter />
    </>
  );
}

export default App;
