import React, { useState } from "react";
import { getAnalytics } from "../services/urlService";
import "./AnalyticsPage.css";

const AnalyticsPage = ({ onSwitch }) => {
  const [shortUrl, setShortUrl] = useState("");
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStats(null);
    setError(null);

    try {
      const code = shortUrl.split("/").pop();
      const res = await getAnalytics(code);
      setStats(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch analytics.");
    }
  };

  return (
    <div className="container">
      <h1 className="main-title">Shortify Analytics</h1>
      <div className="card">
        <p className="subtitle">Get insights for your shortified links</p>
        <form className="analytics-form" onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Enter shortified URL"
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
            required
            className="analytics-input"
          />
          <button type="submit" className="analytics-button">
            Check
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        {stats && (
          <div className="analytics-result">
            <p>
              <strong>Original URL:</strong>{" "}
              <a href={stats.longUrl} target="_blank" rel="noreferrer">
                {stats.longUrl}
              </a>
            </p>
            <p>
              <strong>Total Clicks:</strong> {stats.clicks}
            </p>
          </div>
        )}

        <button onClick={onSwitch} className="toggle-button">
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default AnalyticsPage;