import React from "react";

function TransactionList({ transaction, deleteTransaction }) {
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const headerStyle = {
    color: "#333",
    borderBottom: "2px solid #ddd",
    paddingBottom: "10px",
    marginBottom: "20px",
    fontSize: "24px",
    textAlign:'center'
  };

  const transactionStyle = {
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "15px",
    margin: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "16px",
  };

  const deleteButtonStyle = {
    backgroundColor: "#ff4757",
    color: "white",
    border: "none",
    borderRadius: "3px",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.2s",
  };

  const deleteButtonHoverStyle = {
    backgroundColor: "#ff3742",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Transaction History</h1>
      {transaction.map((item) => (
        <div key={item.id} style={transactionStyle}>
          <span>
            {item.title}: ${item.amount}
          </span>
          <button
            style={deleteButtonStyle}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                deleteButtonHoverStyle.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                deleteButtonStyle.backgroundColor)
            }
            onClick={() => deleteTransaction(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
