import './ProductPage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import ReviewList from '../../components/ReviewList/ReviewList';
import KeywordBreakdown from '../../components/KeywordBreakdown/KeywordBreakdown';

function ProductPage() {
  const [keywords, setKeywords] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  const getKeywords = async () => {
    try {
      const results = await axios.get(`${apiUrl}/keywords`);
      setKeywords(results.data);
    } catch (error) {
      console.log(`Error retreiving keywords from server:`, error);
    }
  };

  useEffect(() => {
    getKeywords();
  }, []);

  return (
    <>
      <h1>Product Page</h1>
      <div className="content-container">
        {keywords.length > 0 ? (
          <KeywordBreakdown keywords={keywords} />
        ) : (
          <p>Loading keywords...</p>
        )}
        <div className="review-list__container">
          <ReviewList />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
