import React from "react";
import { useParams } from "react-router-dom";
import CryptoDetails from "../components/CryptoDetails";

const Details = () => {
  const { id } = useParams();

  return (
    <div>
      <CryptoDetails cryptoId={id} />
    </div>
  );
};

export default Details;
