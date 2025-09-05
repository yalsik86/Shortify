import React, { useState } from "react";
import ShortifyForm from "../components/ShortifyForm";
import ShortUrlDisplay from "../components/ShortUrlDisplay";
import "./HomePage.css";

const Home = ({ onSwitch }) => {
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleShortenSuccess = (url) => {
    setShortUrl(url);
    setError(null);
  };

  const handleShortenError = (errMessage) => {
    setShortUrl(null);
    setError(errMessage);
  };

  return (
    <div className="container">
      <h1 className="main-title">Shortify</h1>
      <div className="card">
        <p className="subtitle">
          A high-performance and scalable URL Shortening service
        </p>
        <ShortifyForm
          onSuccess={handleShortenSuccess}
          onError={handleShortenError}
        />
        {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}
        {error && <p className="error">{error}</p>}
        <button onClick={onSwitch} className="toggle-button">
          Go to Analytics →
        </button>
      </div>
    </div>
  );
};

export default Home;