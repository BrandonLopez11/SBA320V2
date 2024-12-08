import React, { useEffect, useState } from "react";
import { fetchCryptoDetails } from "../utils/api";
import "../styles.css";

export default function CryptoDetails({ cryptoId, onClose }) {
  const [details, setDetails] = useState({});

  // Fetch crypto details when the component mounts or `cryptoId` changes
  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await fetchCryptoDetails(cryptoId);
        setDetails(data);
      } catch (error) {
        console.error("Failed to fetch crypto details:", error);
      }
    };
    getDetails();
  }, [cryptoId]);

  if (!details || Object.keys(details).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      {/* Back Button to trigger `onClose` */}
      <button className="back-button" onClick={onClose}>
        Back
      </button>
      <h2 className="crypto-title">{details.name}</h2>
      <p>
        <strong>Symbol:</strong> {details.symbol?.toUpperCase()}
      </p>
      <p>
        <strong>Rank:</strong> {details.market_cap_rank || 'N/A'}
      </p>
      <p>
        <strong>Current Price:</strong> ${details.market_data?.current_price?.usd?.toLocaleString() || 'N/A'}
      </p>
      <p>
        <strong>All-time High:</strong> ${details.market_data?.ath?.usd?.toLocaleString() || 'N/A'}
      </p>
      <div className="chart-container">
        {details.image?.large ? (
          <img src={details.image.large} alt={details.name} />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>
    </div>
  );
}
