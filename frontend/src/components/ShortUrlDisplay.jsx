import React from "react";

const ShortUrlDisplay = ({ shortUrl, infoMessage }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Short URL copied to clipboard!");
  };

  return (
    <div>
      {infoMessage && (
        <p style={{ color: "blue" }}>
          {infoMessage}
          <br />
        </p>
      )}
      <p>
        Short URL:{" "}
        <a href={shortUrl} target="_blank" rel="noreferrer">
          {shortUrl}
        </a>
      </p>
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
};

export default ShortUrlDisplay;