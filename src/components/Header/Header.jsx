import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="bg-white px-4 lg:px-6 py-3.5 ">
        <div className="flex flex-wrap  mx-auto max-w-screen-xl justify-between items-center">
          <Link to="home" className="flex">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
              Shoping <span className="text-orange-400">Cart</span>
            </span>
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto "
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="#" className="text-gray-70 hover:text-orange-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-70 hover:text-orange-400">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-70 hover:text-orange-400">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
