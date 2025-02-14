import { type ReactNode } from "react";
import { Link, NavLink } from "react-router";

type PropTypes = {
  children: ReactNode;
};

const Layout = ({ children }: PropTypes) => {
  return (
    <>
      <header>
        <Link to="/">
          <img src="/vite.svg" alt="" />
          <h2>Gin Cocktails</h2>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; 2025 - Syntra Full Stack</footer>
    </>
  );
};
export default Layout;
