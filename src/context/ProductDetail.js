import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(productId),
    name: `Product ${productId}`,
    description: "This is a detailed description of the product. It includes information about the features, materials, and usage instructions. The product is designed to provide maximum comfort and efficiency for the user.",
    price: 99.99,
    image: `{https://picsum.photos/800/600?random=${productId}}`,
    category: "electronics",
    features: [
      "High-quality materials",
      "Durable construction",
      "User-friendly design",
      "Energy efficient",
      "1-year warranty"
    ],
    specifications: {
      "Dimensions": "10 x 5 x 2 inches",
      "Weight": "1.5 lbs",
      "Color": "Black/Silver",
      "Material": "Aluminum and plastic",
      "Power": "Rechargeable battery (included)"
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    // Optionally show a notification
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

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