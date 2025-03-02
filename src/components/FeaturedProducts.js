import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
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
    },{
      id: 6,
      name: "Yoga Mat",
      description: "Non-slip, eco-friendly yoga mat for comfortable workouts.",
      price: 29.99,
      image: "https://img.freepik.com/free-photo/top-view-pink-fitness-mat-two-black-dumbbells-isolated-pink-surface_181624-48649.jpg?ga=GA1.1.104960088.1740074004&semt=ais_hybrid",
      category: "fashion"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;