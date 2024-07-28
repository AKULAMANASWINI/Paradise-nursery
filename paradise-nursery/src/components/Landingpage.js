import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push('/products');
  };

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to Paradise Nursery</h1>
        <h2>Where Green Meets Serenity</h2>
        <p>
          At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
        </p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;