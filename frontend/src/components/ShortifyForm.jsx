import React, { useState } from "react";
import { shortenURL } from "../services/urlService";

const ShortifyForm = ({ onSuccess, onError }) => {
  const [longUrl, setLongUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await shortenURL(longUrl);
      onSuccess(response.shortUrl, "URL Shortified!");
    } catch (err) {
      if (err.response?.status === 409) {
        const existingShortUrl = err.response.data.data.shortUrl;
        onSuccess(existingShortUrl, "URL Shortified!");
      } else {
        onError(err.response?.data?.message || "Something went wrong");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter URL to Shortify"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <button type="submit">Shortify</button>
    </form>
  );
};

export default ShortifyForm;