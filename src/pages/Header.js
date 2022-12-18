import React from "react";
import menu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
const Header = () => {
  const menuItems = [
    {
      name: "Collections",
      id: 1,
    },
    {
      name: "Man",
      id: 2,
    },
    {
      name: "Weman",
      id: 3,
    },
    {
      name: "About",
      id: 4,
    },
    {
      name: "Contact",
      id: 5,
    },
  ];
  return (
    <div>
      {/* sadfsadffffffffffffasdffffffffffff */}
      <nav class="bg-white px-2 sm:px-4 py-2.5   w-full z-20 top-0 left-0 border-b border-gray-100 dark:border-gray-600 lg:py-8 lg:max-w-7xl mx-auto ">
        <div class="container flex flex-wrap items-center justify-between mx-auto ">
          <button
            data-collapse-toggle="navbar-sticky"
            z
            type="button"
            class="inline-flex items-center p-2 text-sm text-slate-500 rounded-lg md:hidden hover:bg-gray-100  focus:ring-gray-200   "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <img className="  " src={menu} alt="" />
          </button>
          <a href=" " class="flex items-center">
            <img src={logo} alt="" />
          </a>
          <div class="flex md:order-2">
            <ul className="flex justify-start items-center  gap-4">
              <li className="text-xl cursor-pointer">
                <HiOutlineShoppingCart className="text-2xl"></HiOutlineShoppingCart>
              </li>
              <li className="cursor-pointer">
                <img className="w-12" src={avatar} alt="" />
              </li>
            </ul>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white     ">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-slate-500   rounded md:bg-transparent  md:p-0  "
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
