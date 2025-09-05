import React, { useState } from "react";
import ShortifyForm from "../components/ShortifyForm";
import ShortUrlDisplay from "../components/ShortUrlDisplay";
import "./HomePage.css";

const Home = () => {
  const [shortUrl, setShortUrl] = useState(null);
  const [infoMessage, setInfoMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleShortenSuccess = (url, message) => {
    setShortUrl(url);
    setInfoMessage(message);
    setError(null);
  };

  const handleShortenError = (errMessage) => {
    setShortUrl(null);
    setInfoMessage(null);
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
        {shortUrl && (
          <ShortUrlDisplay shortUrl={shortUrl} infoMessage={infoMessage} />
        )}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Home;