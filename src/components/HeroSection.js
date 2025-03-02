import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="mb-12">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 md:p-12 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Summer Sale is Live!</h1>
        <p className="text-lg md:text-xl mb-6">Get up to 50% off on selected items</p>
        <Link to="/products">
          <button className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors transform hover:scale-105">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;