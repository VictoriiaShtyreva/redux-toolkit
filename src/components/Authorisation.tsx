import { useDispatch } from "react-redux";

import classes from "./Authorisation.module.css";
import { login } from "../redux/slices/authenticationSlace";

const Authorisation = () => {
  const dispatch = useDispatch();

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Authorisation;
