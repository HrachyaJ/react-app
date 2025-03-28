import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Mock products data - matching the products from ProductsPage.js
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Premium sound quality with noise cancellation technology.",
      price: 99.99,
      image: "https://img.freepik.com/free-psd/technological-headphones-isolated_23-2151209619.jpg?t=st=1740756622~exp=1740760222~hmac=892927eb7062a6ccbb759fca8525a468cafc0d432a1048164bce479cba3a0434&w=1380",
      category: "electronics",
      features: [
        "Noise cancellation technology",
        "Wireless connectivity",
        "Long battery life",
        "Comfortable design",
        "Includes carrying case"
      ],
      specifications: {
        "Dimensions": "7 x 3 x 6 inches",
        "Weight": "0.5 lbs",
        "Color": "Black",
        "Battery Life": "Up to 20 hours",
        "Bluetooth Range": "33 feet"
      }
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Track your fitness and stay connected with notifications.",
      price: 149.99,
      image: "https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid",
      category: "electronics",
      features: [
        "Fitness tracking",
        "Heart rate monitor",
        "GPS tracking",
        "Water resistant",
        "Smartphone notifications"
      ],
      specifications: {
        "Dimensions": "1.5 x 1.0 x 0.4 inches",
        "Weight": "0.2 lbs",
        "Color": "Silver/Black",
        "Battery Life": "Up to 7 days",
        "Display": "1.4 inch AMOLED"
      }
    },
    {
      id: 3,
      name: "Portable Speaker",
      description: "Immersive sound experience with 10 hours of battery life.",
      price: 79.99,
      image: "https://img.freepik.com/free-photo/composition-smart-speaker-table_23-2149036844.jpg?t=st=1740756622~exp=1740760222~hmac=e4992bce30c1e3ff982cf62a0e9468a37ce2222260497d248f447c246fc5de23&w=1380",
      category: "electronics",
      features: [
        "10 hours battery life",
        "Bluetooth 5.0",
        "Waterproof design",
        "360-degree sound",
        "Compact size"
      ],
      specifications: {
        "Dimensions": "6 x 3 x 3 inches",
        "Weight": "1 lb",
        "Color": "Blue",
        "Battery Life": "10 hours",
        "Connectivity": "Bluetooth, AUX"
      }
    },
    {
      id: 4,
      name: "Laptop Backpack",
      description: "Durable, water-resistant backpack with multiple compartments.",
      price: 59.99,
      image: "https://img.freepik.com/free-photo/man-packing-away-his-laptop-into-bag_53876-98075.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid",
      category: "fashion",
      features: [
        "Water-resistant material",
        "Padded laptop compartment",
        "Multiple storage pockets",
        "Comfortable straps",
        "Lightweight design"
      ],
      specifications: {
        "Dimensions": "18 x 12 x 6 inches",
        "Weight": "2 lbs",
        "Color": "Black",
        "Material": "Polyester",
        "Laptop Size": "Up to 15.6 inches"
      }
    },
    {
      id: 5,
      name: "Coffee Maker",
      description: "Brew perfect coffee with this programmable coffee maker.",
      price: 299.99,
      image: "https://img.freepik.com/premium-psd/coffee-machine-3d-illustration_788357-2140.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid",
      category: "home",
      features: [
        "Programmable timer",
        "Brew strength control",
        "Keep warm function",
        "Easy to clean",
        "Large capacity"
      ],
      specifications: {
        "Dimensions": "14 x 10 x 12 inches",
        "Weight": "10 lbs",
        "Color": "Stainless Steel",
        "Capacity": "12 cups",
        "Power": "1100 watts"
      }
    },
    {
      id: 6,
      name: "Yoga Mat",
      description: "Non-slip, eco-friendly yoga mat for comfortable workouts.",
      price: 29.99,
      image: "https://img.freepik.com/free-photo/top-view-pink-fitness-mat-two-black-dumbbells-isolated-pink-surface_181624-48649.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid",
      category: "fashion",
      features: [
        "Non-slip surface",
        "Eco-friendly material",
        "Extra cushioning",
        "Lightweight",
        "Easy to clean"
      ],
      specifications: {
        "Dimensions": "72 x 24 inches",
        "Weight": "2 lbs",
        "Color": "Pink/Black",
        "Material": "TPE Foam",
        "Thickness": "6mm"
      }
    }
  ];

  // Find the specific product based on the productId
  const product = products.find(p => p.id === parseInt(productId));

  const handleAddToCart = () => {
    addToCart(product);
    // Optionally show a notification
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
      >
        <span className="material-symbols-outlined mr-1">arrow_back</span>
        Back
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Specifications</h2>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-1">
                    <span className="font-medium">{key}:</span> {value}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
              <span className="ml-2 text-green-600">In Stock</span>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex-1"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
