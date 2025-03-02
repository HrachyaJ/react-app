import React from "react";
import { useCart } from "../context/CartContext";
import CartDropdown from "./CartDropdown";
import logo from './ecom-react-logo.png';

const Navbar = () => {
  const { getCartCount } = useCart();

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold transition-transform">
            <img src={logo} alt="Company Logo" className="logo-pic"/>
          </a>
          <div className="md:hidden flex items-center space-x-4">
            {/* Add cart and account icons to mobile view */}
            <details className="relative">
              <summary className="list-none cursor-pointer hover:scale-110 transition-transform">
                <div className="relative">
                  <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center cart-count">
                    {getCartCount()}
                  </span>
                </div>
              </summary>
              <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-72 py-2 z-10">
                <CartDropdown />
              </div>
            </details>
            <details className="relative">
              <summary className="list-none cursor-pointer">
                <span className="material-symbols-outlined text-2xl hover:scale-110 transition-transform">
                  account_circle
                </span>
              </summary>
              <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-48 py-2 z-10">
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </a>
                <a href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                  My Orders
                </a>
                <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </a>
                <hr className="my-2" />
                <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </a>
              </div>
            </details>
            <details className="relative">
              <summary className="list-none cursor-pointer">
                <span className="material-symbols-outlined text-2xl hover:scale-110 transition-transform">
                  menu
                </span>
              </summary>
              <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-48 py-2 z-10">
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                  Home
                </a>
                <a href="/products" className="block px-4 py-2 hover:bg-gray-100">
                  Products
                </a>
                <a href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                  Orders
                </a>
                <a href="/category/electronics" className="block px-4 py-2 hover:bg-gray-100">
                  Electronics
                </a>
                <a href="/category/fashion" className="block px-4 py-2 hover:bg-gray-100">
                  Fashion
                </a>
                <a href="/category/home" className="block px-4 py-2 hover:bg-gray-100">
                  Home & Living
                </a>
              </div>
            </details>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="/products" className="hover:text-blue-600 transition-colors">
            Products
          </a>
          <a href="/orders" className="hover:text-blue-600 transition-colors">
            Orders
          </a>
          <details className="relative">
            <summary className="list-none cursor-pointer hover:text-blue-600 transition-colors">
              Categories
              <span className="material-symbols-outlined align-middle ml-1">expand_more</span>
            </summary>
            <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-48 py-2 z-10">
              <a href="/category/electronics" className="block px-4 py-2 hover:bg-gray-100">
                Electronics
              </a>
              <a href="/category/fashion" className="block px-4 py-2 hover:bg-gray-100">
                Fashion
              </a>
              <a href="/category/home" className="block px-4 py-2 hover:bg-gray-100">
                Home & Living
              </a>
            </div>
          </details>
          <div className="flex items-center space-x-4">
            <details className="relative">
              <summary className="list-none cursor-pointer hover:scale-110 transition-transform">
                <div className="relative">
                  <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center cart-count">
                    {getCartCount()}
                  </span>
                </div>
              </summary>
              <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-72 py-2 z-10">
                <CartDropdown />
              </div>
            </details>
            <details className="relative">
              <summary className="list-none cursor-pointer">
                <span className="material-symbols-outlined text-2xl hover:scale-110 transition-transform">
                  account_circle
                </span>
              </summary>
              <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-48 py-2 z-10">
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </a>
                <a href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                  My Orders
                </a>
                <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </a>
                <hr className="my-2" />
                <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;