import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-800 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
              <NavLink to="/">Online Store</NavLink>
            </p>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            ></button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 border-2 border-gray-100">
                  <NavLink to="/products/create">
                    <span>Create New Product</span>
                  </NavLink>
                </p>
              </li>
              <li className="nav-item lg:ml-4">
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 border-2 border-gray-100">
                  <NavLink to="/">
                    <span>Product Details</span>
                  </NavLink>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
