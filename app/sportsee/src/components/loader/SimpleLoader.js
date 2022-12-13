import React from 'react';
import './simpleLoader.css';

/**
 * @description spinner loader
 */
export default function SimpleLoader() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}
