import React from "react";

function Balance({ balance }) {
  const containerStyle = {
    textAlign: "center",
    padding: "25px 20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    border: "2px solid #e9ecef",
    marginBottom: "25px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    color: "#495057",
    fontSize: "18px",
    fontWeight: "normal",
    margin: "0 0 10px 0",
    opacity: "0.8",
  };

  const balanceStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "0",
    color: balance >= 0 ? "#28a745" : "#dc3545",
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Your Balance</p>
      <h1 style={balanceStyle}>${balance.toFixed(2)}</h1>
    </div>
  );
}

export default Balance;
