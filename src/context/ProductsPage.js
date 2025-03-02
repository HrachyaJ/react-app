// ProductsPage.js
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductsPage = () => {
  const { addToCart } = useCart();
  
  // Mock products data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium sound quality with noise cancellation technology.",
      price: 99.99,
      image: "https://img.freepik.com/free-psd/technological-headphones-isolated_23-2151209619.jpg?t=st=1740756622~exp=1740760222~hmac=892927eb7062a6ccbb759fca8525a468cafc0d432a1048164bce479cba3a0434&w=1380",
      category: "electronics"
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Track your fitness and stay connected with notifications.",
      price: 149.99,
      image: "https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid",
      category: "electronics"
    },
    {
      id: 3,
      name: "Portable Speaker",
      description: "Immersive sound experience with 10 hours of battery life.",
      price: 79.99,
      image: "https://img.freepik.com/free-photo/composition-smart-speaker-table_23-2149036844.jpg?t=st=1740756622~exp=1740760222~hmac=e4992bce30c1e3ff982cf62a0e9468a37ce2222260497d248f447c246fc5de23&w=1380",
      category: "electronics"
    },
    {
      id: 4,
      name: "Laptop Backpack",
      description: "Durable, water-resistant backpack with multiple compartments.",
      price: 59.99,
      image: "https://img.freepik.com/free-photo/man-packing-away-his-laptop-into-bag_53876-98075.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid",
      category: "fashion"
    },
    {
      id: 5,
      name: "Coffee Maker",
      description: "Brew perfect coffee with this programmable coffee maker.",
      price: 299.99,
      image: "https://img.freepik.com/premium-psd/coffee-machine-3d-illustration_788357-2140.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid",
      category: "home"
    },
    {
      id: 6,
      name: "Yoga Mat",
      description: "Non-slip, eco-friendly yoga mat for comfortable workouts.",
      price: 29.99,
      image: "https://img.freepik.com/free-photo/top-view-pink-fitness-mat-two-black-dumbbells-isolated-pink-surface_181624-48649.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid",
      category: "fashion"
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/products/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
              />
            </Link>
            <div className="p-4">
              <Link to={`/products/${product.id}`}>
                <h2 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">{product.name}</h2>
              </Link>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-black-600 font-bold">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors add-to-cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;