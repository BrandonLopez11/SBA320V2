import React, { useState, useEffect } from "react";
import { fetchTopCryptos } from "../utils/api";
import SearchBar from "../components/SearchBar";
import CryptoList from "../components/CryptoList";
import CryptoDetails from "../components/CryptoDetails";
import "../styles.css";

export default function Home() {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCryptoId, setSelectedCryptoId] = useState(null);

  useEffect(() => {
    const loadTopCryptos = async () => {
      const data = await fetchTopCryptos();
      setCryptos(data);
    };
    loadTopCryptos();
  }, []);

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* <h1 className="page-title">Crypto Dashboard</h1> */}
      <SearchBar searchTerm={searchTerm} handleSearch={setSearchTerm} />
      {selectedCryptoId ? (
        <CryptoDetails
          cryptoId={selectedCryptoId}
          onClose={() => setSelectedCryptoId(null)}
        />
      ) : (
        <CryptoList
          cryptos={filteredCryptos}
          onSelectCrypto={setSelectedCryptoId}
        />
      )}
    </div>
  );
}
