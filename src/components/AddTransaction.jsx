import React, { useState } from "react";
import "./styles/ExpenseTracker.css";

function AddTransaction({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  function handleForm() {
    const newTransaction = {
      id: Date.now(),
      title: title,
      amount: amount,
    };
    addTransaction(newTransaction);
    setTitle("");
    setAmount("");
  }
  return (
    <div className="form-container">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter title..."
      />
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        placeholder="Enter amount..."
      />
      <button onClick={handleForm}>Add</button>
    </div>
  );
}

export default AddTransaction;
