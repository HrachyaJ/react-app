import React from "react";
import "./NotFoundPage.css"; // Import the new CSS file

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-icon">
          <span className="material-symbols-outlined">search_off</span>
        </div>
        
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        
        <p className="not-found-message">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="not-found-actions">
          <a href="/" className="not-found-button primary">
            Back to Home
          </a>
          <a href="/products" className="not-found-button secondary">
            Browse Products
          </a>
        </div>
        
        <div className="not-found-footer">
          <p className="not-found-footer-text">
            Need help? <a href="/support" className="not-found-footer-link">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
