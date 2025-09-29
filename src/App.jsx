import { useState } from "react";
import "./App.css";
import Header from "./components/HeaderComp";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";

function App() {
  const [transaction, setTransaction] = useState([]);

  function addTransaction(newTransaction) {
    console.log(newTransaction);
    setTransaction([...transaction, newTransaction]);
  }

  function deleteTransaction(id) {
    setTransaction(transaction.filter((item) => item.id !== id));
  }

  const balance = transaction.reduce((total, item) => total + item.amount, 0);

  const appStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    padding: "20px 0",
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    minHeight: "80vh",
  };

  const sectionStyle = {
    marginBottom: "25px",
  };

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <Header />
        </div>

        <div style={sectionStyle}>
          <Balance balance={balance} />
        </div>

        <div style={sectionStyle}>
          <IncomeExpense transaction={transaction} />
        </div>

        <div style={sectionStyle}>
          <AddTransaction addTransaction={addTransaction} />
        </div>

        <div style={sectionStyle}>
          <TransactionList
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
