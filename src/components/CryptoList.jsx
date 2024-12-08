import React from "react";
import "../styles.css";

export default function CryptoList({ cryptos, onSelectCrypto }) {
  return (
    <div className="crypto-list-container">
      <h3>Top 10 Crypto Currencies</h3>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr
              key={crypto.id}
              className="crypto-row"
              onClick={() => onSelectCrypto(crypto.id)}
            >
              <td>{crypto.name}</td>
              <td>${crypto.current_price.toLocaleString()}</td>
              <td>${crypto.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
