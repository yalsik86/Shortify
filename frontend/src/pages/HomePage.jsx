import React, { useState } from "react";
import ShortifyForm from "../components/ShortifyForm";
import ShortUrlDisplay from "../components/ShortUrlDisplay";

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
    <div>
      <h1>Shortify</h1>
      <ShortifyForm
        onSuccess={handleShortenSuccess}
        onError={handleShortenError}
      />
      {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} infoMessage={infoMessage} />}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Home;