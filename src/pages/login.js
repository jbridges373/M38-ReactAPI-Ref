import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { signUp, tokenFetch } from "../utils";

const Login = ({ setter, user }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [logBool, setLogBool] = useState(false);

  useEffect(() => {
    if (localStorage.key("myToken")) {
      tokenFetch(setter);
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    await signUp({ username, email, password }, setter);
  };
  return (
    <div>
      {user && <Navigate to="/home" />}
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {!logBool && (
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        )}
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">{logBool ? "Log In" : "Sign Up"}</button>
      </form>
      <button onClick={() => setLogBool(!logBool)}>
        {logBool ? "Don't " : "Already "} have an account?
      </button>
    </div>
  );
};

export default Login;