import React from 'react';
import { useOrders } from '../context/OrdersContext';

const ClearOrdersButton = () => {
  const { clearOrders } = useOrders();
  
  const handleClearOrders = () => {
    if (window.confirm('Are you sure you want to clear all orders? This action cannot be undone.')) {
      const success = clearOrders();
      if (success) {
        alert('All orders have been cleared successfully.');
      } else {
        alert('There was a problem clearing the orders.');
      }
    }
  };
  
  return (
    <button 
      onClick={handleClearOrders}
      className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
    >
      Clear All Orders
    </button>
  );
};

export default ClearOrdersButton;