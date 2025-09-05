import React, { useState } from "react";
import "./ShortUrlDisplay.css";

const ShortUrlDisplay = ({ shortUrl, infoMessage }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="short-url-display">
      {infoMessage && <p className="info">{infoMessage}</p>}
      <p>
        <a href={shortUrl} target="_blank" rel="noreferrer">
          {shortUrl}
        </a>
      </p>
      <button onClick={copyToClipboard}>Copy</button>
      {copied && <span className="copied">Copied! ✅</span>}
    </div>
  );
};

export default ShortUrlDisplay;