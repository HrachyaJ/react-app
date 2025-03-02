import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import ProductsPage from "./context/ProductsPage";
import ProductDetail from "./context/ProductDetail";
import CartPage from "./context/CartPage";
import CheckoutPage from "./context/CheckoutPage";
import OrdersPage from "./context/OrdersPage";
import OrderDetail from "./context/OrderDetail";
import ProfilePage from "./context/ProfilePage";
import CategoryPage from "./context/CategoryPage";
import NotFoundPage from "./context/NotFoundPage";
import { OrdersProvider } from "./context/OrdersContext";
import "./style.css";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <OrdersProvider>
        <CartProvider>
          <div id="webcrumbs">
            <div className="max-w-full mx-auto">
              <Navbar />
              <main className="px-4 md:px-8 py-6">
                <Routes>
                  {/* Home page */}
                  <Route path="/" element={<HomePage />} />
                  
                  {/* Product pages */}
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:productId" element={<ProductDetail />} />
                  
                  {/* Category pages */}
                  <Route path="/category/:categoryName" element={<CategoryPage />} />
                  
                  {/* Cart and checkout */}
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  
                  {/* Order pages */}
                  <Route path="/orders" element={<OrdersPage />} />
                  <Route path="/orders/:orderId" element={<OrderDetail />} />
                  
                  {/* User pages */}
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/settings" element={<ProfilePage />} /> {/* Reusing ProfilePage */}
                  
                  {/* Authentication (simplified) */}
                  <Route path="/logout" element={<Navigate to="/" />} />
                  
                  {/* 404 page */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </CartProvider>
      </OrdersProvider>
    </Router>
  );
};

export default App;