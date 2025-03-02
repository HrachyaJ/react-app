import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOrders } from '../context/OrdersContext';
import "./Order.css";

const OrderDetail = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { orders, removeOrder } = useOrders();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <p className="text-gray-600">We couldn't find the order you're looking for.</p>
        </div>
      </div>
    );
  }

  const statusInfo = {
    Delivered: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      class: "bg-green-100 text-green-700"
    },
    Shipped: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      class: "bg-blue-100 text-blue-700"
    },
    Processing: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      class: "bg-yellow-100 text-yellow-700"
    },
    Cancelled: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      class: "bg-red-100 text-red-700"
    }
  }[order.status] || { icon: null, class: "bg-gray-100 text-gray-700" };

  const formattedDate = new Date(order.date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const subtotal = order.subtotal || order.items?.reduce((sum, item) => 
    sum + ((item.price || 0) * (item.quantity || 1)), 0) || 0;
  
  const tax = order.tax || (subtotal * 0.0825) || 0;
  
  const total = order.total || (subtotal + tax) || 0;

  const handleDelete = () => {
    removeOrder(orderId);
    navigate('/orders');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="confirmation-box">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this order?</p>
            <div className="confirmation-buttons">
              <button 
                className="confirm-button"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button 
                className="cancel-button"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Orders
      </button>

      {/* Order Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">Order Placed on {formattedDate}</span>
            <h1 className="text-2xl font-bold text-gray-900">Order #{order.id}</h1>
          </div>
          <div className="flex items-center mt-4 sm:mt-0 gap-4">
            <span className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.class}`}>
              {statusInfo.icon}
              <span className="ml-2">{order.status}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Order Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Order Items */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Order Items</h2>
          
          <div className="divide-y">
            {order.items?.map((item, index) => (
              <div key={item.id || index} className="flex py-4 first:pt-0 last:pb-0">
                <div className="w-24 h-24 flex-shrink-0 mr-4">
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.name || 'Unnamed Product'}</h3>
                  <div className="flex justify-between mt-1">
                    <p className="text-sm text-gray-600">Quantity: {item.quantity || 1}</p>
                    <p className="text-sm font-medium">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</p>
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          {/* Price Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div> <br />

          {/* Shipping Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>
            <div className="text-sm text-gray-600 space-y-1">
              <p className="font-medium text-gray-900">{order.shippingAddress?.name || 'N/A'}</p>
              <p>{order.shippingAddress?.street || ''}</p>
              <p>
                {order.shippingAddress?.city || ''}{order.shippingAddress?.city && order.shippingAddress?.state ? ', ' : ''}
                {order.shippingAddress?.state || ''} {order.shippingAddress?.zip || ''}
              </p>
              <p>{order.shippingAddress?.country || ''}</p>
            </div>
          </div> <br />

          {/* Payment Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <p className="text-sm text-gray-600">{order.paymentMethod || 'N/A'}</p>
          </div>
        </div>
      </div> <br />
      <button 
              className="delete-button"
              onClick={() => setShowConfirmation(true)}
            >
              Delete Order
            </button>
    </div>
  );
};

export default OrderDetail;