import React, { useState } from "react";

function AddTransaction({ addTransaction, transaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  function handleForm() {
    if (title !== "" && amount !== 0) {
      const numericAmount = Number(amount);

      const currentBalance = transaction.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );

      if (numericAmount < 0 && Math.abs(numericAmount) > currentBalance) {
        alert("Balance is low!");
        return;
      }

      const newTransaction = {
        id: Date.now(),
        title: title,
        amount: numericAmount,
      };

      addTransaction(newTransaction);
      setTitle("");
      setAmount("");
    } else {
      alert("Please fill in all details.");
    }
  }

  const containerStyle = {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    marginBottom: "20px",
  };

  const headerStyle = {
    color: "#333",
    marginBottom: "15px",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const inputFocusStyle = {
    borderColor: "#4CAF50",
    outline: "none",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    marginTop: "10px",
    transition: "background-color 0.2s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Add New Transaction</h3>
      <input
        style={inputStyle}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onFocus={(e) =>
          (e.target.style.borderColor = inputFocusStyle.borderColor)
        }
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        type="text"
        placeholder="Enter title..."
      />
      <input
        style={inputStyle}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        onFocus={(e) =>
          (e.target.style.borderColor = inputFocusStyle.borderColor)
        }
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        type="number"
        placeholder="Enter amount..."
      />
      <button
        style={buttonStyle}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = buttonStyle.backgroundColor)
        }
        onClick={handleForm}
      >
        Add Transaction
      </button>
    </div>
  );
}

export default AddTransaction;
