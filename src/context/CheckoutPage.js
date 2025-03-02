// CheckoutPage.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext"; // Import useOrders
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { addOrder } = useOrders(); // Get addOrder from OrdersContext
  const navigate = useNavigate(); // For redirection

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Calculate order values
    const subtotal = parseFloat(getCartTotal());
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
  
    // Robust order creation
    const newOrder = {
      id: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      date: new Date().toISOString(),
      status: "Processing",
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image || 'fallback-image-url.jpg', // Ensure image exists
      })),
      subtotal: subtotal,
      shipping: 0,
      tax: tax,
      total: total,
      shippingAddress: {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        street: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zipCode,
        country: formData.country,
      },
      paymentMethod: formData.paymentMethod,
    };
  
    addOrder(newOrder);
    clearCart();
    navigate('/orders');
  };

  const subtotal = parseFloat(getCartTotal());
  const tax = subtotal * 0.1;
  const total = (subtotal + tax).toFixed(2);

  return (
    <div className="checkout-page-container">
      <div className="checkout-page-container">
        <h1 className="checkout-page-title">Checkout</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart-container">
            <span className="material-symbols-outlined empty-cart-icon">shopping_cart</span>
            <h2 className="empty-cart-title">Your cart is empty</h2>
            <p className="empty-cart-message">You can't proceed to checkout with an empty cart.</p>
            <a href="/products" className="continue-shopping-button">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="checkout-content">
            <div className="shipping-payment-section">
              <form onSubmit={handleSubmit} className="checkout-form">
                <h2 className="section-title">Shipping Information</h2>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Street Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="Russia">Russia</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="UAE">UAE</option>
                      <option value="Italy">Italy</option>
                      <option value="Armenia">Armenia</option>
                    </select>
                  </div>
                </div>

                <h2 className="section-title">Payment Method</h2>

                <div className="payment-method">
                  <div className="payment-options">
                    <label className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit-card"
                        checked={formData.paymentMethod === "credit-card"}
                        onChange={handleInputChange}
                      />
                      <span>Credit Card</span>
                    </label>
                    <label className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === "paypal"}
                        onChange={handleInputChange}
                      />
                      <span>PayPal</span>
                    </label>
                  </div>

                  {formData.paymentMethod === "credit-card" && (
                    <div className="credit-card-form">
                      <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardExpiry">Expiration Date</label>
                        <input
                          type="text"
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardCvc">CVC</label>
                        <input
                          type="text"
                          id="cardCvc"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === "paypal" && (
                    <div className="paypal-notice">
                      <p>You will be redirected to PayPal to complete your payment after placing your order.</p>
                    </div>
                  )}
                </div>

                <button type="submit" className="place-order-button">
                  Place Order
                </button>
              </form>
            </div>

            <div className="order-summary-card">
              <h2 className="section-title">Order Summary</h2>

              <div className="order-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                      <h4 className="item-name">{item.name}</h4>
                      <div className="item-quantity-price">
                        <span>Quantity: {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-totals">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Shipping</span>
                  <span className="free-shipping">Free</span>
                </div>
                <div className="total-row">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <div className="payment-icons">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOI6fHnZr07cvQS0v6m0fWsAwVgR_CHCmGKA&s" alt="Visa" />
                <img src="https://cdn.prod.website-files.com/64199d190fc7afa82666d89c/648b606d4a139591f6b3440c_mastercard-1.png" alt="Mastercard" />
                <img src="https://seeklogo.com/images/P/paypal-logo-484B6FE744-seeklogo.com.png" alt="PayPal" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mMnJl5hw46QhQFyhvlLsbkvV6PyiN4ImXQ&s" alt="Apple Pay" />
              </div>

              <p className="terms-notice">
                By placing your order, you agree to our{" "}
                <a href="/terms" className="terms-link">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="terms-link">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;