import { Link, Navigate } from "react-router-dom";

const Navbar = ({ user, setter }) => {
  return (
    <nav>
      {!user && <Navigate to="/" />}
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li
          onClick={() => {
            setter();
            localStorage.removeItem("myToken");
          }}
        >
          Log Out
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;