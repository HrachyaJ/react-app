import React from "react";
import { useCart } from "../context/CartContext";

const CartDropdown = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  return (
    <div className="p-6 w-full">
      <h3 className="font-bold text-xl border-b pb-3 mb-4">Your Cart</h3>
      
      {cartItems.length === 0 ? (
        <div className="py-8 text-center">
          <span className="material-symbols-outlined text-6xl text-gray-300 mb-3">shopping_cart</span>
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="cart-items max-h-80 overflow-y-auto divide-y">
            {cartItems.map((item) => (
              <div key={item.id} className="py-4 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-24 object-cover rounded-md shadow"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 text-lg truncate max-w-[180px]">{item.name}</h4>
                    <button 
                      className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>
                  <p className="text-blue-600 font-semibold text-lg mb-2">${item.price.toFixed(2)}</p>
                  <div className="flex items-center">
                    <div className="flex items-center border rounded-md overflow-hidden">
                      <button 
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <span className="material-symbols-outlined">remove</span>
                      </button>
                      <span className="px-4 py-1 text-center min-w-[40px] font-medium">{item.quantity}</span>
                      <button 
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <span className="material-symbols-outlined">add</span>
                      </button>
                    </div>
                    <span className="ml-auto text-gray-700 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between items-center mb-3 text-lg">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${getCartTotal()}</span>
            </div>
            <div className="flex justify-between items-center mb-4 text-lg">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>
            <div className="flex justify-between items-center font-bold text-xl py-3 border-y mb-4">
              <span>Total</span>
              <span>${getCartTotal()}</span>
            </div>
            
            <div className="mt-6 space-y-3">
            <a
                href="/cart"
                className="cartbutton block bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Cart
              </a>
              <a
                href="/checkout"
                className="block bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Checkout
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropdown;