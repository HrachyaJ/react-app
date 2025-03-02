import React from "react";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  const categories = [
    { name: "Electronics", img: "https://img.freepik.com/premium-photo/photo-computer-peripherals_778780-49866.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid", path: "electronics" },
    { name: "Fashion", img: "https://img.freepik.com/free-photo/stylish-woman-leather-coat-black-hat-demonstrate-winter-fashion-trends-white_273443-4937.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid", path: "fashion" },
    { name: "Home & Living", img: "https://img.freepik.com/premium-photo/modern-living-room-interior-design_1310085-45693.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid", path: "home" },
    { name: "Sport", img: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid", path: "sport" },
    { name: "Automotive", img: "https://img.freepik.com/free-photo/composition-different-car-accessories_23-2149030392.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid", path: "automotive" },
    { name: "Toys", img: "https://img.freepik.com/premium-photo/toys-kids-play-time-colorful-fun-composition_594847-3791.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid", path: "toys" },
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Explore Our Categories</h2> <br/>
      <div className="categsection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/category/${category.path}`}
            className="relative group overflow-hidden rounded-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;