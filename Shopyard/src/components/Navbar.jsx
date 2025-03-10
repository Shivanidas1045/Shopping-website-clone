import { NavLink } from "react-router-dom";


const links = [
  { path: "/", title: "Home" },
  { path: "/product", title: "Product" },
  { path: "/login", title: "Login" },
  { path: "/register", title: "Sign Up" },
];

function Navbar() {
  const defaultLinkStyle = { textDecoration: "none", color: "black" };
  const activeLinkStyle = { textDecoration: "none", color: "#CD853F" };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid px-4">
        <NavLink className="navbar-brand" to="/">
          <img src="https://i.postimg.cc/NFs816sC/si.png" width="100" alt="Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            {links.map(({ path, title }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => (isActive ? activeLinkStyle : defaultLinkStyle)}
                  to={path}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
