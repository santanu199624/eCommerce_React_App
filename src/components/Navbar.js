import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiUserShared2Fill } from "react-icons/ri";
import { FaShoppingBasket } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Jwelary & Accessories", path: "/" },
  { title: "Clothing & Shoes", path: "/" },
  { title: "Home & Living", path: "/" },
  { title: "Wedding & Party", path: "/" },
  { title: "Toys & Entertainment", path: "/" },
  { title: "Art & Collections", path: "/" },
  { title: "Craft Supplies & Tools", path: "/" },
];

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const toggleMenu = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <header className="sticky top-0 z-[1000] max-w-full xl:px-28 px-4  bg-white">
      <nav className="flex justify-between items-center container  md:py-4 pt-6 pb-3">
        {/* Search */}
        <div className="border border-green-600 text-Black w-5 h-5 md:block hidden ">
          <FaSearch />
        </div>

        {/* Logo */}
        <div className="border border-green-600">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        {/* buttons */}
        <div className="border border-green-600 sm:flex items-center justify-between gap-4 hidden">
          <a href="/" className="flex items-center  gap-2">
            <RiUserShared2Fill />
            Account
          </a>
          <a href="/" className="flex items-center  gap-2">
            <FaShoppingBasket />
            Shoping
          </a>
        </div>
        {/* Navbar for sm devices */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isToggleOpen ? (
              <FaXmark className="w-5 h-5 text-Black" />
            ) : (
              <IoMenu className="w-5 h-5 text-Black" />
            )}
          </button>
        </div>
      </nav>
      <hr />
      {/* NavItems */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden">
          {navItems.length &&
            navItems.map(({ title, path }) => {
              return (
                <li key={title} className="hover:text-orange-500">
                  <Link to="/">{title}</Link>
                </li>
              );
            })}
        </ul>
      </div>

      {/* NavItems for mobile menu */}
      <div>
        <ul
          className={`bg-Black text-white rounded px-4 py-4 flex flex-col items-center justify-center gap-4 ${
            isToggleOpen ? "" : "hidden"
          }`}
        >
          {navItems.length &&
            navItems.map(({ title, path }) => {
              return (
                <li key={title} className="hover:text-orange-500">
                  <Link to="/">{title}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
