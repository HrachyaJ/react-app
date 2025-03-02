import React from "react";
import { useCart } from "../context/CartContext"; // Make sure this path is correct

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  return (
    <div className="cart-page-container">
      <h1 className="cart-page-title">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart-container">
          <span className="material-symbols-outlined empty-cart-icon">shopping_cart</span>
          <h2 className="empty-cart-title">Your cart is empty</h2>
          <p className="empty-cart-message">Looks like you haven't added anything to your cart yet.</p>
          <a href="/products" className="continue-shopping-button">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-section">
            <div className="cart-items-table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="product-info">
                          <img src={item.image} alt={item.name} className="product-image" />
                          <div className="product-details">
                            <div className="product-name">{item.name}</div>
                            {item.description && (
                              <div className="product-description">{item.description}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <div className="quantity-control">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <span className="material-symbols-outlined">remove</span>
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <span className="material-symbols-outlined">add</span>
                          </button>
                        </div>
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button onClick={() => removeFromCart(item.id)} className="remove-item-button">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-actions">
              <button onClick={clearCart} className="clear-cart-button">
                <span className="material-symbols-outlined">delete_sweep</span>
                Clear Cart
              </button>
              <a href="/products" className="continue-shopping-link">
                <span className="material-symbols-outlined">shopping_bag</span>
                Continue Shopping
              </a>
            </div>
          </div>

          <div className="order-summary-section">
            <div className="order-summary-card">
              <h2>Order Summary</h2>
              <div className="summary-details">
                <div className="summary-item">
                  <span>Subtotal</span>
                  <span>${getCartTotal()}</span>
                </div>
                <div className="summary-item">
                  <span>Shipping</span>
                  <span className="free-shipping">Free</span>
                </div>
                <div className="summary-item">
                  <span>Tax</span>
                  <span>${(parseFloat(getCartTotal()) * 0.1).toFixed(2)}</span>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <span>${(parseFloat(getCartTotal()) * 1.1).toFixed(2)}</span>
                </div>
              </div>
              <a href="/checkout" className="checkout-button">
                Proceed to Checkout
              </a>
              <div className="payment-icons">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOI6fHnZr07cvQS0v6m0fWsAwVgR_CHCmGKA&s" alt="Visa" />
                <img src="https://cdn.prod.website-files.com/64199d190fc7afa82666d89c/648b606d4a139591f6b3440c_mastercard-1.png" alt="Mastercard" />
                <img src="https://seeklogo.com/images/P/paypal-logo-484B6FE744-seeklogo.com.png" alt="PayPal" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mMnJl5hw46QhQFyhvlLsbkvV6PyiN4ImXQ&s" alt="Apple Pay" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;