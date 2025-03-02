import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-8 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">About Us</h4>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <i className="fa-brands fa-facebook text-2xl hover:text-blue-600 transition-colors cursor-pointer" />
            <i className="fa-brands fa-twitter text-2xl hover:text-blue-400 transition-colors cursor-pointer" />
            <i className="fa-brands fa-instagram text-2xl hover:text-pink-600 transition-colors cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <div className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-t-lg md:rounded-l-lg md:rounded-t-none border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-b-lg md:rounded-r-lg md:rounded-b-none hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;