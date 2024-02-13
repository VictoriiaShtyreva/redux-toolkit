import { useSelector } from "react-redux";

import classes from "./Header.module.css";
import { AppState } from "../misc/type";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authenticationSlace";

const Header = () => {
  const dispatch = useDispatch();
  const isUserAuth = useSelector(
    (state: AppState) => state.authentication.isAuthenticated
  );

  const logoutHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isUserAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
