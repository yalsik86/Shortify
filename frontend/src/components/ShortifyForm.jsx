import React, { useState } from "react";
import { shortenURL } from "../services/urlService";
import "./ShortifyForm.css";

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
    <form className="shortify-form" onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter a URL to shortify"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <button type="submit">Shortify</button>
    </form>
  );
};

export default ShortifyForm;