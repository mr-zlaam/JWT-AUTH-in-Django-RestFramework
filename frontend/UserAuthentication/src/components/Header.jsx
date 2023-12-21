import {} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const HeaderBar = () => {
  return (
    <>
      <div>
        <nav>
          <ul className="navbar">
            <h3>Logo</h3>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HeaderBar;
