import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  const linkStyle = {
    color: "white",
  };
  return (
    <nav>
      <Link to="/" style={linkStyle}>
        <h3>Logo </h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about" style={linkStyle}>
          <li>About</li>
        </Link>
        <Link to="/shop" style={linkStyle}>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
